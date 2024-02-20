import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksUpdateWithoutStockInput } from "../inputs/SimilarStocksUpdateWithoutStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksUpdateWithWhereUniqueWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksUpdateWithWhereUniqueWithoutStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateWithoutStockInput, {
    nullable: false
  })
  data!: SimilarStocksUpdateWithoutStockInput;
}
