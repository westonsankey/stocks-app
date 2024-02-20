import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutIsSimilarToInput } from "../inputs/StockCreateWithoutIsSimilarToInput";
import { StockUpdateWithoutIsSimilarToInput } from "../inputs/StockUpdateWithoutIsSimilarToInput";

@TypeGraphQL.InputType("StockUpsertWithoutIsSimilarToInput", {
  isAbstract: true
})
export class StockUpsertWithoutIsSimilarToInput {
  @TypeGraphQL.Field(_type => StockUpdateWithoutIsSimilarToInput, {
    nullable: false
  })
  update!: StockUpdateWithoutIsSimilarToInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutIsSimilarToInput, {
    nullable: false
  })
  create!: StockCreateWithoutIsSimilarToInput;
}
