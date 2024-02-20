import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateWithoutStockInput } from "../inputs/SimilarStocksCreateWithoutStockInput";
import { SimilarStocksUpdateWithoutStockInput } from "../inputs/SimilarStocksUpdateWithoutStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksUpsertWithWhereUniqueWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksUpsertWithWhereUniqueWithoutStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateWithoutStockInput, {
    nullable: false
  })
  update!: SimilarStocksUpdateWithoutStockInput;

  @TypeGraphQL.Field(_type => SimilarStocksCreateWithoutStockInput, {
    nullable: false
  })
  create!: SimilarStocksCreateWithoutStockInput;
}
