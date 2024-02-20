import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutStocksInput } from "../inputs/UserCreateOrConnectWithoutStocksInput";
import { UserCreateWithoutStocksInput } from "../inputs/UserCreateWithoutStocksInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutStocksInput } from "../inputs/UserUpdateManyWithWhereWithoutStocksInput";
import { UserUpdateWithWhereUniqueWithoutStocksInput } from "../inputs/UserUpdateWithWhereUniqueWithoutStocksInput";
import { UserUpsertWithWhereUniqueWithoutStocksInput } from "../inputs/UserUpsertWithWhereUniqueWithoutStocksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutStocksInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutStocksInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutStocksInput], {
    nullable: true
  })
  create?: UserCreateWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutStocksInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutStocksInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutStocksInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutStocksInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutStocksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
