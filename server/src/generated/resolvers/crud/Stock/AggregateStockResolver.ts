import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStockArgs } from "./args/AggregateStockArgs";
import { Stock } from "../../../models/Stock";
import { AggregateStock } from "../../outputs/AggregateStock";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stock)
export class AggregateStockResolver {
  @TypeGraphQL.Query(_returns => AggregateStock, {
    nullable: false
  })
  async aggregateStock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStockArgs): Promise<AggregateStock> {
    return getPrismaFromContext(ctx).stock.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
