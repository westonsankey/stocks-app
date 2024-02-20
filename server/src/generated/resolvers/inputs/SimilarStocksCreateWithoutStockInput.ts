import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateNestedOneWithoutSimilarStocksInput } from "../inputs/StockCreateNestedOneWithoutSimilarStocksInput";

@TypeGraphQL.InputType("SimilarStocksCreateWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksCreateWithoutStockInput {
  @TypeGraphQL.Field(_type => StockCreateNestedOneWithoutSimilarStocksInput, {
    nullable: false
  })
  similarStock!: StockCreateNestedOneWithoutSimilarStocksInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  score!: Prisma.Decimal;
}
