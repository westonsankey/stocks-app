import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { SimilarStocks } from "../models/SimilarStocks";
import { StockHistory } from "../models/StockHistory";
import { User } from "../models/User";
import { StockCount } from "../resolvers/outputs/StockCount";

@TypeGraphQL.ObjectType("Stock", {
  isAbstract: true
})
export class Stock {
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

  users?: User[];

  history?: StockHistory[];

  similarStocks?: SimilarStocks[];

  isSimilarTo?: SimilarStocks[];

  @TypeGraphQL.Field(_type => StockCount, {
    nullable: true
  })
  _count?: StockCount | null;
}
