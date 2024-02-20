import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateNestedOneWithoutIsSimilarToInput } from "../inputs/StockCreateNestedOneWithoutIsSimilarToInput";
import { StockCreateNestedOneWithoutSimilarStocksInput } from "../inputs/StockCreateNestedOneWithoutSimilarStocksInput";

@TypeGraphQL.InputType("SimilarStocksCreateInput", {
  isAbstract: true
})
export class SimilarStocksCreateInput {
  @TypeGraphQL.Field(_type => StockCreateNestedOneWithoutIsSimilarToInput, {
    nullable: false
  })
  stock!: StockCreateNestedOneWithoutIsSimilarToInput;

  @TypeGraphQL.Field(_type => StockCreateNestedOneWithoutSimilarStocksInput, {
    nullable: false
  })
  similarStock!: StockCreateNestedOneWithoutSimilarStocksInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  score!: Prisma.Decimal;
}
