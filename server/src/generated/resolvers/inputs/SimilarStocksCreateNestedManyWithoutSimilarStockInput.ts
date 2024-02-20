import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateManySimilarStockInputEnvelope } from "../inputs/SimilarStocksCreateManySimilarStockInputEnvelope";
import { SimilarStocksCreateOrConnectWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateOrConnectWithoutSimilarStockInput";
import { SimilarStocksCreateWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateWithoutSimilarStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksCreateNestedManyWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksCreateNestedManyWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateWithoutSimilarStockInput], {
    nullable: true
  })
  create?: SimilarStocksCreateWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksCreateOrConnectWithoutSimilarStockInput], {
    nullable: true
  })
  connectOrCreate?: SimilarStocksCreateOrConnectWithoutSimilarStockInput[] | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksCreateManySimilarStockInputEnvelope, {
    nullable: true
  })
  createMany?: SimilarStocksCreateManySimilarStockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereUniqueInput], {
    nullable: true
  })
  connect?: SimilarStocksWhereUniqueInput[] | undefined;
}
