import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertSimilarStocksArgs } from "./args/UpsertSimilarStocksArgs";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class UpsertSimilarStocksResolver {
  @TypeGraphQL.Mutation(_returns => SimilarStocks, {
    nullable: false
  })
  async upsertSimilarStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSimilarStocksArgs): Promise<SimilarStocks> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).similarStocks.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
