import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateWithoutSimilarStockInput } from "../inputs/SimilarStocksCreateWithoutSimilarStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksCreateOrConnectWithoutSimilarStockInput", {
  isAbstract: true
})
export class SimilarStocksCreateOrConnectWithoutSimilarStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksCreateWithoutSimilarStockInput, {
    nullable: false
  })
  create!: SimilarStocksCreateWithoutSimilarStockInput;
}
