import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateStockHistoryArgs } from "./args/CreateStockHistoryArgs";
import { StockHistory } from "../../../models/StockHistory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class CreateStockHistoryResolver {
  @TypeGraphQL.Mutation(_returns => StockHistory, {
    nullable: false
  })
  async createStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateStockHistoryArgs): Promise<StockHistory> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
