import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { StockUpdateOneRequiredWithoutHistoryInput } from "../inputs/StockUpdateOneRequiredWithoutHistoryInput";

@TypeGraphQL.InputType("StockHistoryUpdateInput", {
  isAbstract: true
})
export class StockHistoryUpdateInput {
  @TypeGraphQL.Field(_type => StockUpdateOneRequiredWithoutHistoryInput, {
    nullable: true
  })
  stock?: StockUpdateOneRequiredWithoutHistoryInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: DecimalFieldUpdateOperationsInput | undefined;
}
