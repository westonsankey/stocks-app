import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstSimilarStocksArgs } from "./args/FindFirstSimilarStocksArgs";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class FindFirstSimilarStocksResolver {
  @TypeGraphQL.Query(_returns => SimilarStocks, {
    nullable: true
  })
  async findFirstSimilarStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSimilarStocksArgs): Promise<SimilarStocks | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).similarStocks.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
