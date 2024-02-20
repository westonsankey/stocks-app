import * as TypeGraphQL from "type-graphql";

export enum SimilarStocksScalarFieldEnum {
  stockId = "stockId",
  similarStockId = "similarStockId",
  score = "score"
}
TypeGraphQL.registerEnumType(SimilarStocksScalarFieldEnum, {
  name: "SimilarStocksScalarFieldEnum",
  description: undefined,
});
