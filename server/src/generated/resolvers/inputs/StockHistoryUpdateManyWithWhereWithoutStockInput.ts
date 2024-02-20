import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryScalarWhereInput } from "../inputs/StockHistoryScalarWhereInput";
import { StockHistoryUpdateManyMutationInput } from "../inputs/StockHistoryUpdateManyMutationInput";

@TypeGraphQL.InputType("StockHistoryUpdateManyWithWhereWithoutStockInput", {
  isAbstract: true
})
export class StockHistoryUpdateManyWithWhereWithoutStockInput {
  @TypeGraphQL.Field(_type => StockHistoryScalarWhereInput, {
    nullable: false
  })
  where!: StockHistoryScalarWhereInput;

  @TypeGraphQL.Field(_type => StockHistoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: StockHistoryUpdateManyMutationInput;
}
