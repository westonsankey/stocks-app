import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutUsersInput } from "../inputs/StockCreateOrConnectWithoutUsersInput";
import { StockCreateWithoutUsersInput } from "../inputs/StockCreateWithoutUsersInput";
import { StockScalarWhereInput } from "../inputs/StockScalarWhereInput";
import { StockUpdateManyWithWhereWithoutUsersInput } from "../inputs/StockUpdateManyWithWhereWithoutUsersInput";
import { StockUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/StockUpdateWithWhereUniqueWithoutUsersInput";
import { StockUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/StockUpsertWithWhereUniqueWithoutUsersInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockUpdateManyWithoutUsersInput", {
  isAbstract: true
})
export class StockUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [StockCreateWithoutUsersInput], {
    nullable: true
  })
  create?: StockCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: StockUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereUniqueInput], {
    nullable: true
  })
  set?: StockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereUniqueInput], {
    nullable: true
  })
  delete?: StockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereUniqueInput], {
    nullable: true
  })
  connect?: StockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: StockUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: StockUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StockScalarWhereInput[] | undefined;
}
