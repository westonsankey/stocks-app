import * as TypeGraphQL from "type-graphql";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { Stock } from "../../../models/Stock";
import { StockHistory } from "../../../models/StockHistory";
import { User } from "../../../models/User";
import { StockHistoryArgs } from "./args/StockHistoryArgs";
import { StockIsSimilarToArgs } from "./args/StockIsSimilarToArgs";
import { StockSimilarStocksArgs } from "./args/StockSimilarStocksArgs";
import { StockUsersArgs } from "./args/StockUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stock)
export class StockRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() stock: Stock, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StockUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).stock.findUnique({
      where: {
        id: stock.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StockHistory], {
    nullable: false
  })
  async history(@TypeGraphQL.Root() stock: Stock, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StockHistoryArgs): Promise<StockHistory[]> {
    return getPrismaFromContext(ctx).stock.findUnique({
      where: {
        id: stock.id,
      },
    }).history(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SimilarStocks], {
    nullable: false
  })
  async similarStocks(@TypeGraphQL.Root() stock: Stock, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StockSimilarStocksArgs): Promise<SimilarStocks[]> {
    return getPrismaFromContext(ctx).stock.findUnique({
      where: {
        id: stock.id,
      },
    }).similarStocks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SimilarStocks], {
    nullable: false
  })
  async isSimilarTo(@TypeGraphQL.Root() stock: Stock, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StockIsSimilarToArgs): Promise<SimilarStocks[]> {
    return getPrismaFromContext(ctx).stock.findUnique({
      where: {
        id: stock.id,
      },
    }).isSimilarTo(args);
  }
}
