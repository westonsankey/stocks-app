import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockOrderByWithAggregationInput } from "../../../inputs/StockOrderByWithAggregationInput";
import { StockScalarWhereWithAggregatesInput } from "../../../inputs/StockScalarWhereWithAggregatesInput";
import { StockWhereInput } from "../../../inputs/StockWhereInput";
import { StockScalarFieldEnum } from "../../../../enums/StockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStockArgs {
  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  where?: StockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StockOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StockOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tickerSymbol" | "companyName" | "businessSummary" | "grossProfit" | "marketCap" | "regularMarketChange" | "regularMarketChangePercent" | "regularMarketPrice" | "revenueGrowth" | "totalRevenue" | "lastRefreshed">;

  @TypeGraphQL.Field(_type => StockScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StockScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
