import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStockHistoryArgs } from "./args/AggregateStockHistoryArgs";
import { StockHistory } from "../../../models/StockHistory";
import { AggregateStockHistory } from "../../outputs/AggregateStockHistory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class AggregateStockHistoryResolver {
  @TypeGraphQL.Query(_returns => AggregateStockHistory, {
    nullable: false
  })
  async aggregateStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStockHistoryArgs): Promise<AggregateStockHistory> {
    return getPrismaFromContext(ctx).stockHistory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
