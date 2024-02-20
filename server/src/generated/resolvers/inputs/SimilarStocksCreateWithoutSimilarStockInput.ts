import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateNestedOneWithoutIsSimilarToInput } from "../inputs/StockCreateNestedOneWithoutIsSimilarToInput";

@TypeGraphQL.InputType("SimilarStocksCreateWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksCreateWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => StockCreateNestedOneWithoutIsSimilarToInput, {
    nullable: false
  })
  stock!: StockCreateNestedOneWithoutIsSimilarToInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  score!: Prisma.Decimal;
}
