import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockAvgAggregate } from "../outputs/StockAvgAggregate";
import { StockCountAggregate } from "../outputs/StockCountAggregate";
import { StockMaxAggregate } from "../outputs/StockMaxAggregate";
import { StockMinAggregate } from "../outputs/StockMinAggregate";
import { StockSumAggregate } from "../outputs/StockSumAggregate";

@TypeGraphQL.ObjectType("AggregateStock", {
  isAbstract: true
})
export class AggregateStock {
  @TypeGraphQL.Field(_type => StockCountAggregate, {
    nullable: true
  })
  _count!: StockCountAggregate | null;

  @TypeGraphQL.Field(_type => StockAvgAggregate, {
    nullable: true
  })
  _avg!: StockAvgAggregate | null;

  @TypeGraphQL.Field(_type => StockSumAggregate, {
    nullable: true
  })
  _sum!: StockSumAggregate | null;

  @TypeGraphQL.Field(_type => StockMinAggregate, {
    nullable: true
  })
  _min!: StockMinAggregate | null;

  @TypeGraphQL.Field(_type => StockMaxAggregate, {
    nullable: true
  })
  _max!: StockMaxAggregate | null;
}
