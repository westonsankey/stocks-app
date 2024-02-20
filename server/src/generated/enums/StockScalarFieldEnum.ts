import * as TypeGraphQL from "type-graphql";

export enum StockScalarFieldEnum {
  id = "id",
  tickerSymbol = "tickerSymbol",
  companyName = "companyName",
  businessSummary = "businessSummary",
  grossProfit = "grossProfit",
  marketCap = "marketCap",
  regularMarketChange = "regularMarketChange",
  regularMarketChangePercent = "regularMarketChangePercent",
  regularMarketPrice = "regularMarketPrice",
  revenueGrowth = "revenueGrowth",
  totalRevenue = "totalRevenue",
  lastRefreshed = "lastRefreshed"
}
TypeGraphQL.registerEnumType(StockScalarFieldEnum, {
  name: "StockScalarFieldEnum",
  description: undefined,
});
