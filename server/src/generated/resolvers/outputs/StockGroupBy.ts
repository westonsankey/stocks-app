import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockAvgAggregate } from "../outputs/StockAvgAggregate";
import { StockCountAggregate } from "../outputs/StockCountAggregate";
import { StockMaxAggregate } from "../outputs/StockMaxAggregate";
import { StockMinAggregate } from "../outputs/StockMinAggregate";
import { StockSumAggregate } from "../outputs/StockSumAggregate";

@TypeGraphQL.ObjectType("StockGroupBy", {
  isAbstract: true
})
export class StockGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tickerSymbol!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  companyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  businessSummary!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  grossProfit!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  marketCap!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  regularMarketChange!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  regularMarketChangePercent!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  regularMarketPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  revenueGrowth!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  totalRevenue!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastRefreshed!: Date;

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
