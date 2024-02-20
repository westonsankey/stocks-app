import { PrismaClient, Stock } from "@prisma/client";
import { injectable } from "inversify";
import { DateTime } from "luxon";
import axios from "../config/axios";
import { StockHistory } from "../generated";
import { timestampToDate } from "../utilities/date";
import { IStockService } from "./interfaces";
import { TStockData } from "./stockTypes";
import {
  TRecommendedSymbol,
  TStockHistory,
  TStockHistoryResponse,
} from "./types";

const prisma = new PrismaClient();

@injectable()
export default class StockService implements IStockService {
  async addStock(userId: number, tickerSymbol: string): Promise<Boolean> {
    return this.getStockAndPersist(userId, tickerSymbol)
      .then((res) => {
        return !!res.stock.id;
      })
      .catch(() => false);
  }

  private transformHistory = (
    symbol: string,
    historyResp: TStockHistoryResponse
  ): TStockHistory => {
    return historyResp[symbol].timestamp.map((ts, i) => {
      return { x: `${timestampToDate(ts)}`, y: historyResp[symbol].close[i] };
    });
  };

  private getStockDataFromApi = async (userId: number, symbol: string) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user?.yahooFinanceApiKey) {
      throw Error("No API key");
    }

    const response = await axios.get(
      `https://yfapi.net/v11/finance/quoteSummary/${symbol}`,
      {
        headers: {
          "X-API-KEY": user.yahooFinanceApiKey,
        },
        params: {
          modules:
            "defaultKeyStatistics,summaryDetail,price,assetProfile,financialData",
        },
      }
    );

    const quote = response.data.quoteSummary.result[0];

    const historyResponse = await axios.get(
      `https://yfapi.net/v8/finance/spark?interval=1d&range=1y&symbols=${symbol}`,
      {
        headers: {
          "X-API-KEY": user.yahooFinanceApiKey,
        },
      }
    );

    const data: TStockData = {
      companyName: quote.price.shortName,
      tickerSymbol: quote.price.symbol,
      grossProfit: quote.financialData.grossProfits.fmt,
      marketCap: quote.summaryDetail.marketCap.fmt,
      regularMarketChange: parseFloat(quote.price.regularMarketChange.fmt),
      regularMarketChangePercent: quote.price.regularMarketChangePercent.fmt,
      regularMarketPrice: parseFloat(quote.price.regularMarketPrice.fmt),
      revenueGrowth: quote.financialData.revenueGrowth.fmt,
      totalRevenue: quote.financialData.totalRevenue.fmt,
      history: this.transformHistory(symbol, historyResponse.data),
      businessSummary: quote.assetProfile.longBusinessSummary,
      lastRefreshed: new Date(),
    };

    return data;
  };

  getSimilarStocksFromApi = async (symbol: string) => {
    const apiKey = "s1jpu5GUjn3A2pbE10O6g7PHkIPNfDNN9xue05A7";

    if (!apiKey) {
      throw Error("No API key");
    }

    const response = await axios.get(
      `https://yfapi.net/v6/finance/recommendationsbysymbol/${symbol}`,
      {
        headers: {
          "X-API-KEY": apiKey,
        },
      }
    );

    return response.data.finance.result[0]
      .recommendedSymbols as TRecommendedSymbol[];
  };

  private upsertStock = async (data: TStockData) => {
    const stock = await prisma.stock.upsert({
      where: {
        tickerSymbol: data.tickerSymbol,
      },
      update: {
        businessSummary: data.businessSummary,
        companyName: data.companyName,
        grossProfit: data.grossProfit,
        lastRefreshed: data.lastRefreshed,
        marketCap: data.marketCap,
        regularMarketChange: data.regularMarketChange,
        regularMarketChangePercent: data.regularMarketChangePercent.toString(),
        regularMarketPrice: data.regularMarketPrice,
        revenueGrowth: data.revenueGrowth.toString(),
        totalRevenue: data.totalRevenue,
      },
      create: {
        tickerSymbol: data.tickerSymbol,
        businessSummary: data.businessSummary,
        companyName: data.companyName,
        grossProfit: data.grossProfit,
        lastRefreshed: data.lastRefreshed,
        marketCap: data.marketCap,
        regularMarketChange: data.regularMarketChange,
        regularMarketChangePercent: data.regularMarketChangePercent.toString(),
        regularMarketPrice: data.regularMarketPrice,
        revenueGrowth: data.revenueGrowth.toString(),
        totalRevenue: data.totalRevenue,
      },
    });

    await prisma.stockHistory.createMany({
      data: data.history.map((record) => ({
        date: DateTime.fromFormat(record.x, "MMM d, yyyy").toString(),
        price: record.y,
        stockId: stock.id,
      })),
    });

    const history = await prisma.stockHistory.findMany({
      where: {
        stockId: stock.id,
      },
    });

    return {
      stock,
      history,
    };
  };

  private getStockAndPersist = async (userId: number, tickerSymbol: string) => {
    const stockData = await this.getStockDataFromApi(userId, tickerSymbol);
    const { stock, history } = await this.upsertStock(stockData);

    return {
      stock,
      history,
    };
  };

  async getSummary(
    userId: number,
    tickerSymbol: string
  ): Promise<Stock & { history: StockHistory[] }> {
    let stock = await prisma.stock.findUnique({
      where: {
        tickerSymbol: tickerSymbol,
      },
      include: {
        history: true,
      },
    });

    if (stock?.lastRefreshed) {
      const lastRefreshed = DateTime.fromISO(
        stock?.lastRefreshed.toISOString()
      );

      const diff = DateTime.now().diff(lastRefreshed, "seconds");

      if (diff.seconds > 10) {
        const resp = await this.getStockAndPersist(userId, tickerSymbol);
        stock = {
          ...resp.stock,
          history: resp.history,
        };
      }
    }

    if (!stock) {
      const resp = await this.getStockAndPersist(userId, tickerSymbol);
      stock = {
        ...resp.stock,
        history: resp.history,
      };
    }

    return stock;
  }

  private persistSimilarStocks = async (
    userId: number,
    tickerSymbol: string,
    similarStocks: TRecommendedSymbol[]
  ) => {
    similarStocks.forEach(async (similarStock) => {
      var stockId: number | undefined = undefined;

      const stock = await prisma.stock.findUnique({
        where: {
          tickerSymbol: similarStock.symbol,
        },
      });

      if (stock) {
        stockId = stock.id;
      } else {
        const resp = await this.getStockAndPersist(userId, similarStock.symbol);
        stockId = resp.stock.id;
      }

      if (stockId) {
        await prisma.stock.update({
          where: {
            tickerSymbol,
          },
          data: {
            similarStocks: {
              createMany: {
                skipDuplicates: true,
                data: [
                  {
                    stockId,
                    score: similarStock.score,
                  },
                ],
              },
            },
          },
        });
      }
    });
  };

  public async getSimilarStocks(
    userId: number,
    tickerSymbol: string
  ): Promise<TRecommendedSymbol[]> {
    const stock = await prisma.stock.findUnique({
      where: {
        tickerSymbol,
      },
      select: {
        similarStocks: {
          include: {
            similarStock: true,
            stock: true,
          },
        },
      },
    });

    if (!stock) {
      return Promise.resolve([]);
    }

    if (stock.similarStocks.length === 0) {
      const similarStocks = await this.getSimilarStocksFromApi(tickerSymbol);
      this.persistSimilarStocks(userId, tickerSymbol, similarStocks);
      return similarStocks;
    } else {
      return Promise.resolve(
        stock.similarStocks.map((similarStock) => ({
          score: similarStock.score.toNumber(),
          symbol: similarStock.similarStock.tickerSymbol,
        }))
      );
    }
  }
}
