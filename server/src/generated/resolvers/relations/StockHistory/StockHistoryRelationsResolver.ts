import * as TypeGraphQL from "type-graphql";
import { Stock } from "../../../models/Stock";
import { StockHistory } from "../../../models/StockHistory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class StockHistoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stock, {
    nullable: false
  })
  async stock(@TypeGraphQL.Root() stockHistory: StockHistory, @TypeGraphQL.Ctx() ctx: any): Promise<Stock> {
    return getPrismaFromContext(ctx).stockHistory.findUnique({
      where: {
        id: stockHistory.id,
      },
    }).stock({});
  }
}
