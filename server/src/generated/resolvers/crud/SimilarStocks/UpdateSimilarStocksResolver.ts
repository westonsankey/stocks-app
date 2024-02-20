import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateSimilarStocksArgs } from "./args/UpdateSimilarStocksArgs";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class UpdateSimilarStocksResolver {
  @TypeGraphQL.Mutation(_returns => SimilarStocks, {
    nullable: true
  })
  async updateSimilarStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSimilarStocksArgs): Promise<SimilarStocks | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).similarStocks.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
