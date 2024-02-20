import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSimilarStocksArgs } from "./args/AggregateSimilarStocksArgs";
import { SimilarStocks } from "../../../models/SimilarStocks";
import { AggregateSimilarStocks } from "../../outputs/AggregateSimilarStocks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SimilarStocks)
export class AggregateSimilarStocksResolver {
  @TypeGraphQL.Query(_returns => AggregateSimilarStocks, {
    nullable: false
  })
  async aggregateSimilarStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSimilarStocksArgs): Promise<AggregateSimilarStocks> {
    return getPrismaFromContext(ctx).similarStocks.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
