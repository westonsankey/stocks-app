import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutIsSimilarToInput } from "../inputs/StockCreateWithoutIsSimilarToInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateOrConnectWithoutIsSimilarToInput", {
  isAbstract: true
})
export class StockCreateOrConnectWithoutIsSimilarToInput {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutIsSimilarToInput, {
    nullable: false
  })
  create!: StockCreateWithoutIsSimilarToInput;
}
