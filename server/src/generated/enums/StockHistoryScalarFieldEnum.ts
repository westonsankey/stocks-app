import * as TypeGraphQL from "type-graphql";

export enum StockHistoryScalarFieldEnum {
  id = "id",
  stockId = "stockId",
  date = "date",
  price = "price"
}
TypeGraphQL.registerEnumType(StockHistoryScalarFieldEnum, {
  name: "StockHistoryScalarFieldEnum",
  description: undefined,
});
