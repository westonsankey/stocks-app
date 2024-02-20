import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksUpdateWithoutSimilarStockInput } from "../inputs/SimilarStocksUpdateWithoutSimilarStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateWithoutSimilarStockInput, {
    nullable: false
  })
  data!: SimilarStocksUpdateWithoutSimilarStockInput;
}
