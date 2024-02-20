import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutUsersInput } from "../inputs/StockCreateWithoutUsersInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class StockCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutUsersInput, {
    nullable: false
  })
  create!: StockCreateWithoutUsersInput;
}
