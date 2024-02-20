import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateManyStockInputEnvelope } from "../inputs/SimilarStocksCreateManyStockInputEnvelope";
import { SimilarStocksCreateOrConnectWithoutStockInput } from "../inputs/SimilarStocksCreateOrConnectWithoutStockInput";
import { SimilarStocksCreateWithoutStockInput } from "../inputs/SimilarStocksCreateWithoutStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksCreateNestedManyWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksCreateNestedManyWithoutStockInput {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateWithoutStockInput], {
    nullable: true
  })
  create?: SimilarStocksCreateWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksCreateOrConnectWithoutStockInput], {
    nullable: true
  })
  connectOrCreate?: SimilarStocksCreateOrConnectWithoutStockInput[] | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksCreateManyStockInputEnvelope, {
    nullable: true
  })
  createMany?: SimilarStocksCreateManyStockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereUniqueInput], {
    nullable: true
  })
  connect?: SimilarStocksWhereUniqueInput[] | undefined;
}
