import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateNestedManyWithoutUsersInput } from "../inputs/StockCreateNestedManyWithoutUsersInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  yahooFinanceApiKey?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field(_type => StockCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  stocks?: StockCreateNestedManyWithoutUsersInput | undefined;
}
