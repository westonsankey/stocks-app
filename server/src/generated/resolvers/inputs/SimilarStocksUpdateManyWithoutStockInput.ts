import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateManyStockInputEnvelope } from "../inputs/SimilarStocksCreateManyStockInputEnvelope";
import { SimilarStocksCreateOrConnectWithoutStockInput } from "../inputs/SimilarStocksCreateOrConnectWithoutStockInput";
import { SimilarStocksCreateWithoutStockInput } from "../inputs/SimilarStocksCreateWithoutStockInput";
import { SimilarStocksScalarWhereInput } from "../inputs/SimilarStocksScalarWhereInput";
import { SimilarStocksUpdateManyWithWhereWithoutStockInput } from "../inputs/SimilarStocksUpdateManyWithWhereWithoutStockInput";
import { SimilarStocksUpdateWithWhereUniqueWithoutStockInput } from "../inputs/SimilarStocksUpdateWithWhereUniqueWithoutStockInput";
import { SimilarStocksUpsertWithWhereUniqueWithoutStockInput } from "../inputs/SimilarStocksUpsertWithWhereUniqueWithoutStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksUpdateManyWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksUpdateManyWithoutStockInput {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateWithoutStockInput], {
    nullable: true
  })
  create?: SimilarStocksCreateWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksCreateOrConnectWithoutStockInput], {
    nullable: true
  })
  connectOrCreate?: SimilarStocksCreateOrConnectWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksUpsertWithWhereUniqueWithoutStockInput], {
    nullable: true
  })
  upsert?: SimilarStocksUpsertWithWhereUniqueWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksCreateManyStockInputEnvelope, {
    nullable: true
  })
  createMany?: SimilarStocksCreateManyStockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereUniqueInput], {
    nullable: true
  })
  set?: SimilarStocksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SimilarStocksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereUniqueInput], {
    nullable: true
  })
  delete?: SimilarStocksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereUniqueInput], {
    nullable: true
  })
  connect?: SimilarStocksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksUpdateWithWhereUniqueWithoutStockInput], {
    nullable: true
  })
  update?: SimilarStocksUpdateWithWhereUniqueWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksUpdateManyWithWhereWithoutStockInput], {
    nullable: true
  })
  updateMany?: SimilarStocksUpdateManyWithWhereWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SimilarStocksScalarWhereInput[] | undefined;
}
