import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("StockMaxAggregate", {
  isAbstract: true
})
export class StockMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickerSymbol!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  companyName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  businessSummary!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grossProfit!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  marketCap!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  regularMarketChange!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  regularMarketChangePercent!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  regularMarketPrice!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  revenueGrowth!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  totalRevenue!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastRefreshed!: Date | null;
}
