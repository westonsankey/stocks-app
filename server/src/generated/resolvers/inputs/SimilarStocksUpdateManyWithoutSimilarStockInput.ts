import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateManySimilarStockInputEnvelope } from "../inputs/SimilarStocksCreateManySimilarStockInputEnvelope";
import { SimilarStocksCreateOrConnectWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateOrConnectWithoutSimilarStockInput";
import { SimilarStocksCreateWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateWithoutSimilarStockInput";
import { SimilarStocksScalarWhereInput } from "../inputs/SimilarStocksScalarWhereInput";
import { SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput } from "../inputs/SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput";
import { SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput } from "../inputs/SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput";
import { SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput } from "../inputs/SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksUpdateManyWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksUpdateManyWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateWithoutSimilarStockInput], {
    nullable: true
  })
  create?: SimilarStocksCreateWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksCreateOrConnectWithoutSimilarStockInput], {
    nullable: true
  })
  connectOrCreate?: SimilarStocksCreateOrConnectWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput], {
    nullable: true
  })
  upsert?: SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksCreateManySimilarStockInputEnvelope, {
    nullable: true
  })
  createMany?: SimilarStocksCreateManySimilarStockInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput], {
    nullable: true
  })
  update?: SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput], {
    nullable: true
  })
  updateMany?: SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SimilarStocksScalarWhereInput[] | undefined;
}
