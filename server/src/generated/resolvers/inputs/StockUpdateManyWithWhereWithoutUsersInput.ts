import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockScalarWhereInput } from "../inputs/StockScalarWhereInput";
import { StockUpdateManyMutationInput } from "../inputs/StockUpdateManyMutationInput";

@TypeGraphQL.InputType("StockUpdateManyWithWhereWithoutUsersInput", {
  isAbstract: true
})
export class StockUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => StockScalarWhereInput, {
    nullable: false
  })
  where!: StockScalarWhereInput;

  @TypeGraphQL.Field(_type => StockUpdateManyMutationInput, {
    nullable: false
  })
  data!: StockUpdateManyMutationInput;
}
