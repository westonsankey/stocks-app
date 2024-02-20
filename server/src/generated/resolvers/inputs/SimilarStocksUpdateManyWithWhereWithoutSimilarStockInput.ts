import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksScalarWhereInput } from "../inputs/SimilarStocksScalarWhereInput";
import { SimilarStocksUpdateManyMutationInput } from "../inputs/SimilarStocksUpdateManyMutationInput";

@TypeGraphQL.InputType("SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksScalarWhereInput, {
    nullable: false
  })
  where!: SimilarStocksScalarWhereInput;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateManyMutationInput, {
    nullable: false
  })
  data!: SimilarStocksUpdateManyMutationInput;
}
