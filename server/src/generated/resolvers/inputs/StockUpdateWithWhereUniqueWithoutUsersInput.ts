import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockUpdateWithoutUsersInput } from "../inputs/StockUpdateWithoutUsersInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class StockUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: StockUpdateWithoutUsersInput;
}
