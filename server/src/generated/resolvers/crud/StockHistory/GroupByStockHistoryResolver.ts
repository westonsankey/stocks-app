import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStockHistoryArgs } from "./args/GroupByStockHistoryArgs";
import { StockHistory } from "../../../models/StockHistory";
import { StockHistoryGroupBy } from "../../outputs/StockHistoryGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class GroupByStockHistoryResolver {
  @TypeGraphQL.Query(_returns => [StockHistoryGroupBy], {
    nullable: false
  })
  async groupByStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStockHistoryArgs): Promise<StockHistoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
