import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { SimilarStockResponse } from "../entities/SimilarStock";
import { StockSummaryResponse } from "../entities/StockSummary";
import { Stock } from "../generated";
import { IContext } from "../graphql/context";
import { hasYahooApiToken } from "../middleware/hasYahooApiToken";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { TRecommendedSymbol } from "../services/types";

@InputType()
class TickerSymbol {
  @Field()
  tickerSymbol: string;
}

@Resolver(Stock)
export class StockResolver {
  @Mutation(() => Boolean) // TODO: this should probably return the stock
  @UseMiddleware(isAuthenticated, hasYahooApiToken)
  async addStock(
    @Ctx() ctx: IContext,
    @Arg("tickerSymbol") tickerSymbol: string
  ) {
    if (ctx.userId) {
      const success = await ctx.container.stockService.addStock(
        ctx.userId,
        tickerSymbol
      );

      if (success) {
        ctx.container.userService
          .addStock(ctx.userId, tickerSymbol)
          .then(() => true);
      }
    }

    return false;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuthenticated)
  async removeStock(
    @Ctx() ctx: IContext,
    @Arg("tickerSymbol") tickerSymbol: string
  ) {
    if (ctx.userId) {
      return await ctx.container.userService.removeStock(
        ctx.userId,
        tickerSymbol
      );
    }
    return false;
  }

  @Query(() => [StockSummaryResponse])
  @UseMiddleware(isAuthenticated, hasYahooApiToken)
  async getStockSummary(
    @Ctx() ctx: IContext,
    @Arg("tickerSymbols", () => [TickerSymbol]) tickerSymbols: TickerSymbol[]
  ): Promise<StockSummaryResponse[]> {
    const userId = ctx.userId;
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const promises = tickerSymbols.map((tickerSymbol) =>
      ctx.container.stockService.getSummary(userId, tickerSymbol.tickerSymbol)
    );

    return await Promise.all(promises);
  }

  @Query(() => [SimilarStockResponse])
  @UseMiddleware(isAuthenticated)
  async getSimilarStocks(
    @Ctx() ctx: IContext,
    @Arg("tickerSymbol", () => TickerSymbol) tickerSymbol: TickerSymbol
  ): Promise<TRecommendedSymbol[]> {
    const userId = ctx.userId;
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const similarstocks = ctx.container.stockService.getSimilarStocks(
      userId,
      tickerSymbol.tickerSymbol
    );

    return await similarstocks;
  }
}
