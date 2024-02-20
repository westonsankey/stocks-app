import * as TypeGraphQL from "type-graphql";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { Stock } from "../../../models/Stock";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class SimilarStocksRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stock, {
    nullable: false
  })
  async stock(@TypeGraphQL.Root() similarStocks: SimilarStocks, @TypeGraphQL.Ctx() ctx: any): Promise<Stock> {
    return getPrismaFromContext(ctx).similarStocks.findUnique({
      where: {
        stockId_similarStockId: {
          stockId: similarStocks.stockId,
          similarStockId: similarStocks.similarStockId,
        },
      },
    }).stock({});
  }

  @TypeGraphQL.FieldResolver(_type => Stock, {
    nullable: false
  })
  async similarStock(@TypeGraphQL.Root() similarStocks: SimilarStocks, @TypeGraphQL.Ctx() ctx: any): Promise<Stock> {
    return getPrismaFromContext(ctx).similarStocks.findUnique({
      where: {
        stockId_similarStockId: {
          stockId: similarStocks.stockId,
          similarStockId: similarStocks.similarStockId,
        },
      },
    }).similarStock({});
  }
}
