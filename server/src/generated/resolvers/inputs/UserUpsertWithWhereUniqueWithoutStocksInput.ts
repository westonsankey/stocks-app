import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutStocksInput } from "../inputs/UserCreateWithoutStocksInput";
import { UserUpdateWithoutStocksInput } from "../inputs/UserUpdateWithoutStocksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutStocksInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutStocksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutStocksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutStocksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutStocksInput, {
    nullable: false
  })
  create!: UserCreateWithoutStocksInput;
}
