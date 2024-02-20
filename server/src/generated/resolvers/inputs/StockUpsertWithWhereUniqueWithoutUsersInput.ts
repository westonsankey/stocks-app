import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutUsersInput } from "../inputs/StockCreateWithoutUsersInput";
import { StockUpdateWithoutUsersInput } from "../inputs/StockUpdateWithoutUsersInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class StockUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: StockUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutUsersInput, {
    nullable: false
  })
  create!: StockCreateWithoutUsersInput;
}
