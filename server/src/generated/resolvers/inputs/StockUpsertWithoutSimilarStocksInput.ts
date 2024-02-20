import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutSimilarStocksInput } from "../inputs/StockCreateWithoutSimilarStocksInput";
import { StockUpdateWithoutSimilarStocksInput } from "../inputs/StockUpdateWithoutSimilarStocksInput";

@TypeGraphQL.InputType("StockUpsertWithoutSimilarStocksInput", {
  isAbstract: true
})
export class StockUpsertWithoutSimilarStocksInput {
  @TypeGraphQL.Field(_type => StockUpdateWithoutSimilarStocksInput, {
    nullable: false
  })
  update!: StockUpdateWithoutSimilarStocksInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutSimilarStocksInput, {
    nullable: false
  })
  create!: StockCreateWithoutSimilarStocksInput;
}
