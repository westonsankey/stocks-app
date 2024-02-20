import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyStockHistoryArgs } from "./args/FindManyStockHistoryArgs";
import { StockHistory } from "../../../models/StockHistory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class FindManyStockHistoryResolver {
  @TypeGraphQL.Query(_returns => [StockHistory], {
    nullable: false
  })
  async stockHistories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStockHistoryArgs): Promise<StockHistory[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
