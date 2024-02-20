import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutHistoryInput } from "../inputs/StockCreateWithoutHistoryInput";
import { StockUpdateWithoutHistoryInput } from "../inputs/StockUpdateWithoutHistoryInput";

@TypeGraphQL.InputType("StockUpsertWithoutHistoryInput", {
  isAbstract: true
})
export class StockUpsertWithoutHistoryInput {
  @TypeGraphQL.Field(_type => StockUpdateWithoutHistoryInput, {
    nullable: false
  })
  update!: StockUpdateWithoutHistoryInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutHistoryInput, {
    nullable: false
  })
  create!: StockCreateWithoutHistoryInput;
}
