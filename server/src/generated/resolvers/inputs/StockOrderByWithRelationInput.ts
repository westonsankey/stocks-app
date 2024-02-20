import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksOrderByRelationAggregateInput } from "../inputs/SimilarStocksOrderByRelationAggregateInput";
import { StockHistoryOrderByRelationAggregateInput } from "../inputs/StockHistoryOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StockOrderByWithRelationInput", {
  isAbstract: true
})
export class StockOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tickerSymbol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  companyName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  businessSummary?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grossProfit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  marketCap?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  regularMarketChange?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  regularMarketChangePercent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  regularMarketPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  revenueGrowth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalRevenue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastRefreshed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryOrderByRelationAggregateInput, {
    nullable: true
  })
  history?: StockHistoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksOrderByRelationAggregateInput, {
    nullable: true
  })
  similarStocks?: SimilarStocksOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksOrderByRelationAggregateInput, {
    nullable: true
  })
  isSimilarTo?: SimilarStocksOrderByRelationAggregateInput | undefined;
}
