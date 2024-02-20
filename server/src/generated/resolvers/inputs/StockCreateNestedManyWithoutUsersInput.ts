import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutUsersInput } from "../inputs/StockCreateOrConnectWithoutUsersInput";
import { StockCreateWithoutUsersInput } from "../inputs/StockCreateWithoutUsersInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class StockCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [StockCreateWithoutUsersInput], {
    nullable: true
  })
  create?: StockCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereUniqueInput], {
    nullable: true
  })
  connect?: StockWhereUniqueInput[] | undefined;
}
