import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySimilarStocksArgs } from "./args/GroupBySimilarStocksArgs";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { SimilarStocksGroupBy } from "../../outputs/SimilarStocksGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class GroupBySimilarStocksResolver {
  @TypeGraphQL.Query(_returns => [SimilarStocksGroupBy], {
    nullable: false
  })
  async groupBySimilarStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySimilarStocksArgs): Promise<SimilarStocksGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).similarStocks.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
