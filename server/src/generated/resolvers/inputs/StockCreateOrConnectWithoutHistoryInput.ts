import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutHistoryInput } from "../inputs/StockCreateWithoutHistoryInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateOrConnectWithoutHistoryInput", {
  isAbstract: true
})
export class StockCreateOrConnectWithoutHistoryInput {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutHistoryInput, {
    nullable: false
  })
  create!: StockCreateWithoutHistoryInput;
}
