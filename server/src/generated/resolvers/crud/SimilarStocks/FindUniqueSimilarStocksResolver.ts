import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSimilarStocksArgs } from "./args/FindUniqueSimilarStocksArgs";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class FindUniqueSimilarStocksResolver {
  @TypeGraphQL.Query(_returns => SimilarStocks, {
    nullable: true
  })
  async findUniqueSimilarStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSimilarStocksArgs): Promise<SimilarStocks | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).similarStocks.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
