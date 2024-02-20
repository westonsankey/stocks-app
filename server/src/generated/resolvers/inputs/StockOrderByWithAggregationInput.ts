import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockAvgOrderByAggregateInput } from "../inputs/StockAvgOrderByAggregateInput";
import { StockCountOrderByAggregateInput } from "../inputs/StockCountOrderByAggregateInput";
import { StockMaxOrderByAggregateInput } from "../inputs/StockMaxOrderByAggregateInput";
import { StockMinOrderByAggregateInput } from "../inputs/StockMinOrderByAggregateInput";
import { StockSumOrderByAggregateInput } from "../inputs/StockSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StockOrderByWithAggregationInput", {
  isAbstract: true
})
export class StockOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => StockCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StockCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StockAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StockMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StockMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StockSumOrderByAggregateInput | undefined;
}
