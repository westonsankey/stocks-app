import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { StockUpdateOneRequiredWithoutSimilarStocksInput } from "../inputs/StockUpdateOneRequiredWithoutSimilarStocksInput";

@TypeGraphQL.InputType("SimilarStocksUpdateWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksUpdateWithoutStockInput {
  @TypeGraphQL.Field(_type => StockUpdateOneRequiredWithoutSimilarStocksInput, {
    nullable: true
  })
  similarStock?: StockUpdateOneRequiredWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  score?: DecimalFieldUpdateOperationsInput | undefined;
}
