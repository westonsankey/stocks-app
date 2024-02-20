import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { StockUpdateOneRequiredWithoutIsSimilarToInput } from "../inputs/StockUpdateOneRequiredWithoutIsSimilarToInput";
import { StockUpdateOneRequiredWithoutSimilarStocksInput } from "../inputs/StockUpdateOneRequiredWithoutSimilarStocksInput";

@TypeGraphQL.InputType("SimilarStocksUpdateInput", {
  isAbstract: true
})
export class SimilarStocksUpdateInput {
  @TypeGraphQL.Field(_type => StockUpdateOneRequiredWithoutIsSimilarToInput, {
    nullable: true
  })
  stock?: StockUpdateOneRequiredWithoutIsSimilarToInput | undefined;

  @TypeGraphQL.Field(_type => StockUpdateOneRequiredWithoutSimilarStocksInput, {
    nullable: true
  })
  similarStock?: StockUpdateOneRequiredWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  score?: DecimalFieldUpdateOperationsInput | undefined;
}
