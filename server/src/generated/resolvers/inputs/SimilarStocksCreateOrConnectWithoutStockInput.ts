import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateWithoutStockInput } from "../inputs/SimilarStocksCreateWithoutStockInput";
import { SimilarStocksWhereUniqueInput } from "../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.InputType("SimilarStocksCreateOrConnectWithoutStockInput", {
  isAbstract: true
})
export class SimilarStocksCreateOrConnectWithoutStockInput {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksCreateWithoutStockInput, {
    nullable: false
  })
  create!: SimilarStocksCreateWithoutStockInput;
}
