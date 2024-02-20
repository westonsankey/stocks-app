import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SimilarStocksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SimilarStocksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SimilarStocksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SimilarStocksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SimilarStocksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  stockId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  similarStockId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  score?: DecimalWithAggregatesFilter | undefined;
}
