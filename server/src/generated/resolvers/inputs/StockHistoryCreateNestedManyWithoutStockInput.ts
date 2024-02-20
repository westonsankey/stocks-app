import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryCreateManyStockInputEnvelope } from "../inputs/StockHistoryCreateManyStockInputEnvelope";
import { StockHistoryCreateOrConnectWithoutStockInput } from "../inputs/StockHistoryCreateOrConnectWithoutStockInput";
import { StockHistoryCreateWithoutStockInput } from "../inputs/StockHistoryCreateWithoutStockInput";
import { StockHistoryWhereUniqueInput } from "../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.InputType("StockHistoryCreateNestedManyWithoutStockInput", {
  isAbstract: true
})
export class StockHistoryCreateNestedManyWithoutStockInput {
  @TypeGraphQL.Field(_type => [StockHistoryCreateWithoutStockInput], {
    nullable: true
  })
  create?: StockHistoryCreateWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryCreateOrConnectWithoutStockInput], {
    nullable: true
  })
  connectOrCreate?: StockHistoryCreateOrConnectWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => StockHistoryCreateManyStockInputEnvelope, {
    nullable: true
  })
  createMany?: StockHistoryCreateManyStockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: StockHistoryWhereUniqueInput[] | undefined;
}
