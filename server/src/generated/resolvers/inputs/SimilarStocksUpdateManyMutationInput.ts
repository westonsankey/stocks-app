import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SimilarStocksUpdateManyMutationInput", {
  isAbstract: true
})
export class SimilarStocksUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  score?: DecimalFieldUpdateOperationsInput | undefined;
}
