import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryCreateWithoutStockInput } from "../inputs/StockHistoryCreateWithoutStockInput";
import { StockHistoryUpdateWithoutStockInput } from "../inputs/StockHistoryUpdateWithoutStockInput";
import { StockHistoryWhereUniqueInput } from "../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.InputType("StockHistoryUpsertWithWhereUniqueWithoutStockInput", {
  isAbstract: true
})
export class StockHistoryUpsertWithWhereUniqueWithoutStockInput {
  @TypeGraphQL.Field(_type => StockHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: StockHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockHistoryUpdateWithoutStockInput, {
    nullable: false
  })
  update!: StockHistoryUpdateWithoutStockInput;

  @TypeGraphQL.Field(_type => StockHistoryCreateWithoutStockInput, {
    nullable: false
  })
  create!: StockHistoryCreateWithoutStockInput;
}
