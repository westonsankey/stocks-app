import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateWithoutSimilarStockInput";
import { SimilarStocksUpdateWithoutSimilarStockInput } from "../inputs/SimilarStocksUpdateWithoutSimilarStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateWithoutSimilarStockInput, {
    nullable: false
  })
  update!: SimilarStocksUpdateWithoutSimilarStockInput;

  @TypeGraphQL.Field(_type => SimilarStocksCreateWithoutSimilarStockInput, {
    nullable: false
  })
  create!: SimilarStocksCreateWithoutSimilarStockInput;
}
