export type TStockHistoryResponse = {
  [symbol: string]: {
    dataGranularity: number;
    timestamp: number[];
    symbol: string;
    close: number[];
    end: any;
    start: any;
    previousClose: any;
    chartPreviousClose: any;
  };
};

export type TStockHistory = {
  x: string;
  y: number;
}[];

export type TStockData = {
  tickerSymbol: string;
  companyName: string;
  businessSummary: string;
  grossProfit: string;
  marketCap: string;
  regularMarketPrice: number;
  regularMarketChange: number;
  regularMarketChangePercent: string;
  revenueGrowth: string;
  totalRevenue: string;
  lastRefreshed: string;
  history: TStockHistory;
};

export type CardWidget = "QUOTE" | "CHART" | "INFO";
