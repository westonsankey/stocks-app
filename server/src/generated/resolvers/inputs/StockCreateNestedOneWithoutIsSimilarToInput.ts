import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutIsSimilarToInput } from "../inputs/StockCreateOrConnectWithoutIsSimilarToInput";
import { StockCreateWithoutIsSimilarToInput } from "../inputs/StockCreateWithoutIsSimilarToInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateNestedOneWithoutIsSimilarToInput", {
  isAbstract: true
})
export class StockCreateNestedOneWithoutIsSimilarToInput {
  @TypeGraphQL.Field(_type => StockCreateWithoutIsSimilarToInput, {
    nullable: true
  })
  create?: StockCreateWithoutIsSimilarToInput | undefined;

  @TypeGraphQL.Field(_type => StockCreateOrConnectWithoutIsSimilarToInput, {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutIsSimilarToInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: true
  })
  connect?: StockWhereUniqueInput | undefined;
}
