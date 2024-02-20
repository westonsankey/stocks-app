import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStockHistoryArgs } from "./args/AggregateStockHistoryArgs";
import { CreateManyStockHistoryArgs } from "./args/CreateManyStockHistoryArgs";
import { CreateStockHistoryArgs } from "./args/CreateStockHistoryArgs";
import { DeleteManyStockHistoryArgs } from "./args/DeleteManyStockHistoryArgs";
import { DeleteStockHistoryArgs } from "./args/DeleteStockHistoryArgs";
import { FindFirstStockHistoryArgs } from "./args/FindFirstStockHistoryArgs";
import { FindManyStockHistoryArgs } from "./args/FindManyStockHistoryArgs";
import { FindUniqueStockHistoryArgs } from "./args/FindUniqueStockHistoryArgs";
import { GroupByStockHistoryArgs } from "./args/GroupByStockHistoryArgs";
import { UpdateManyStockHistoryArgs } from "./args/UpdateManyStockHistoryArgs";
import { UpdateStockHistoryArgs } from "./args/UpdateStockHistoryArgs";
import { UpsertStockHistoryArgs } from "./args/UpsertStockHistoryArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { StockHistory } from "../../../models/StockHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStockHistory } from "../../outputs/AggregateStockHistory";
import { StockHistoryGroupBy } from "../../outputs/StockHistoryGroupBy";

@TypeGraphQL.Resolver(_of => StockHistory)
export class StockHistoryCrudResolver {
  @TypeGraphQL.Query(_returns => StockHistory, {
    nullable: true
  })
  async stockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStockHistoryArgs): Promise<StockHistory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [StockHistory], {
    nullable: false
  })
  async stockHistories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStockHistoryArgs): Promise<StockHistory[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyStockHistoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => StockHistory, {
    nullable: true
  })
  async updateStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStockHistoryArgs): Promise<StockHistory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyStockHistoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyStockHistoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => StockHistory, {
    nullable: false
  })
  async upsertStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertStockHistoryArgs): Promise<StockHistory> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateStockHistory, {
    nullable: false
  })
  async aggregateStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStockHistoryArgs): Promise<AggregateStockHistory> {
    return getPrismaFromContext(ctx).stockHistory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [StockHistoryGroupBy], {
    nullable: false
  })
  async groupByStockHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStockHistoryArgs): Promise<StockHistoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stockHistory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
