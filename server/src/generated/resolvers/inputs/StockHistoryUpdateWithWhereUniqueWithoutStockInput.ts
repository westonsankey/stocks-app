import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryUpdateWithoutStockInput } from "../inputs/StockHistoryUpdateWithoutStockInput";
import { StockHistoryWhereUniqueInput } from "../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.InputType("StockHistoryUpdateWithWhereUniqueWithoutStockInput", {
  isAbstract: true
})
export class StockHistoryUpdateWithWhereUniqueWithoutStockInput {
  @TypeGraphQL.Field(_type => StockHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: StockHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockHistoryUpdateWithoutStockInput, {
    nullable: false
  })
  data!: StockHistoryUpdateWithoutStockInput;
}
