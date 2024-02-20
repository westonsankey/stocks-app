import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryCreateManyStockInputEnvelope } from "../inputs/StockHistoryCreateManyStockInputEnvelope";
import { StockHistoryCreateOrConnectWithoutStockInput } from "../inputs/StockHistoryCreateOrConnectWithoutStockInput";
import { StockHistoryCreateWithoutStockInput } from "../inputs/StockHistoryCreateWithoutStockInput";
import { StockHistoryScalarWhereInput } from "../inputs/StockHistoryScalarWhereInput";
import { StockHistoryUpdateManyWithWhereWithoutStockInput } from "../inputs/StockHistoryUpdateManyWithWhereWithoutStockInput";
import { StockHistoryUpdateWithWhereUniqueWithoutStockInput } from "../inputs/StockHistoryUpdateWithWhereUniqueWithoutStockInput";
import { StockHistoryUpsertWithWhereUniqueWithoutStockInput } from "../inputs/StockHistoryUpsertWithWhereUniqueWithoutStockInput";
import { StockHistoryWhereUniqueInput } from "../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.InputType("StockHistoryUpdateManyWithoutStockInput", {
  isAbstract: true
})
export class StockHistoryUpdateManyWithoutStockInput {
  @TypeGraphQL.Field(_type => [StockHistoryCreateWithoutStockInput], {
    nullable: true
  })
  create?: StockHistoryCreateWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryCreateOrConnectWithoutStockInput], {
    nullable: true
  })
  connectOrCreate?: StockHistoryCreateOrConnectWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryUpsertWithWhereUniqueWithoutStockInput], {
    nullable: true
  })
  upsert?: StockHistoryUpsertWithWhereUniqueWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => StockHistoryCreateManyStockInputEnvelope, {
    nullable: true
  })
  createMany?: StockHistoryCreateManyStockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereUniqueInput], {
    nullable: true
  })
  set?: StockHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StockHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereUniqueInput], {
    nullable: true
  })
  delete?: StockHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: StockHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryUpdateWithWhereUniqueWithoutStockInput], {
    nullable: true
  })
  update?: StockHistoryUpdateWithWhereUniqueWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryUpdateManyWithWhereWithoutStockInput], {
    nullable: true
  })
  updateMany?: StockHistoryUpdateManyWithWhereWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StockHistoryScalarWhereInput[] | undefined;
}
