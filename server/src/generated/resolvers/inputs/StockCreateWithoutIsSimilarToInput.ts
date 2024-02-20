import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateNestedManyWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateNestedManyWithoutSimilarStockInput";
import { StockHistoryCreateNestedManyWithoutStockInput } from "../inputs/StockHistoryCreateNestedManyWithoutStockInput";
import { UserCreateNestedManyWithoutStocksInput } from "../inputs/UserCreateNestedManyWithoutStocksInput";

@TypeGraphQL.InputType("StockCreateWithoutIsSimilarToInput", {
  isAbstract: true
})
export class StockCreateWithoutIsSimilarToInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutStocksInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutStocksInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryCreateNestedManyWithoutStockInput, {
    nullable: true
  })
  history?: StockHistoryCreateNestedManyWithoutStockInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksCreateNestedManyWithoutSimilarStockInput, {
    nullable: true
  })
  similarStocks?: SimilarStocksCreateNestedManyWithoutSimilarStockInput | undefined;
}
