import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutStocksInput } from "../inputs/UserCreateOrConnectWithoutStocksInput";
import { UserCreateWithoutStocksInput } from "../inputs/UserCreateWithoutStocksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutStocksInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutStocksInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutStocksInput], {
    nullable: true
  })
  create?: UserCreateWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutStocksInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
