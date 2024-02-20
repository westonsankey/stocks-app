import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutStocksInput } from "../inputs/UserUpdateWithoutStocksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutStocksInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutStocksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutStocksInput, {
    nullable: false
  })
  data!: UserUpdateWithoutStocksInput;
}
