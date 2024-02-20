import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstStockHistoryArgs } from "./args/FindFirstStockHistoryArgs";
import { StockHistory } from "../../../models/StockHistory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StockHistory)
export class FindFirstStockHistoryResolver {
  @TypeGraphQL.Query(_returns => StockHistory, {
    nullable: true
  })
  async findFirstStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStockHistoryArgs): Promise<StockHistory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
