import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksStockIdSimilarStockIdCompoundUniqueInput } from "../inputs/SimilarStocksStockIdSimilarStockIdCompoundUniqueInput";

@TypeGraphQL.InputType("SimilarStocksWhereUniqueInput", {
  isAbstract: true
})
export class SimilarStocksWhereUniqueInput {
  @TypeGraphQL.Field(_type => SimilarStocksStockIdSimilarStockIdCompoundUniqueInput, {
    nullable: true
  })
  stockId_similarStockId?: SimilarStocksStockIdSimilarStockIdCompoundUniqueInput | undefined;
}
