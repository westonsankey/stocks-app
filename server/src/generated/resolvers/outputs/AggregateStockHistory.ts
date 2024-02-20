import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryAvgAggregate } from "../outputs/StockHistoryAvgAggregate";
import { StockHistoryCountAggregate } from "../outputs/StockHistoryCountAggregate";
import { StockHistoryMaxAggregate } from "../outputs/StockHistoryMaxAggregate";
import { StockHistoryMinAggregate } from "../outputs/StockHistoryMinAggregate";
import { StockHistorySumAggregate } from "../outputs/StockHistorySumAggregate";

@TypeGraphQL.ObjectType("AggregateStockHistory", {
  isAbstract: true
})
export class AggregateStockHistory {
  @TypeGraphQL.Field(_type => StockHistoryCountAggregate, {
    nullable: true
  })
  _count!: StockHistoryCountAggregate | null;

  @TypeGraphQL.Field(_type => StockHistoryAvgAggregate, {
    nullable: true
  })
  _avg!: StockHistoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => StockHistorySumAggregate, {
    nullable: true
  })
  _sum!: StockHistorySumAggregate | null;

  @TypeGraphQL.Field(_type => StockHistoryMinAggregate, {
    nullable: true
  })
  _min!: StockHistoryMinAggregate | null;

  @TypeGraphQL.Field(_type => StockHistoryMaxAggregate, {
    nullable: true
  })
  _max!: StockHistoryMaxAggregate | null;
}
