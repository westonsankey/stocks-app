import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteStockHistoryArgs } from "./args/DeleteStockHistoryArgs";
import { StockHistory } from "../../../models/StockHistory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class DeleteStockHistoryResolver {
  @TypeGraphQL.Mutation(_returns => StockHistory, {
    nullable: true
  })
  async deleteStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteStockHistoryArgs): Promise<StockHistory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
