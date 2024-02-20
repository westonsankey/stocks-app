import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StockRelationFilter } from "../inputs/StockRelationFilter";

@TypeGraphQL.InputType("SimilarStocksWhereInput", {
  isAbstract: true
})
export class SimilarStocksWhereInput {
  @TypeGraphQL.Field(_type => [SimilarStocksWhereInput], {
    nullable: true
  })
  AND?: SimilarStocksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereInput], {
    nullable: true
  })
  OR?: SimilarStocksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksWhereInput], {
    nullable: true
  })
  NOT?: SimilarStocksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stockId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StockRelationFilter, {
    nullable: true
  })
  stock?: StockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  similarStockId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StockRelationFilter, {
    nullable: true
  })
  similarStock?: StockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  score?: DecimalFilter | undefined;
}
