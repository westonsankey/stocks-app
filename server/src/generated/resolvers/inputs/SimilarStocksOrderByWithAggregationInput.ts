import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksAvgOrderByAggregateInput } from "../inputs/SimilarStocksAvgOrderByAggregateInput";
import { SimilarStocksCountOrderByAggregateInput } from "../inputs/SimilarStocksCountOrderByAggregateInput";
import { SimilarStocksMaxOrderByAggregateInput } from "../inputs/SimilarStocksMaxOrderByAggregateInput";
import { SimilarStocksMinOrderByAggregateInput } from "../inputs/SimilarStocksMinOrderByAggregateInput";
import { SimilarStocksSumOrderByAggregateInput } from "../inputs/SimilarStocksSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SimilarStocksOrderByWithAggregationInput", {
  isAbstract: true
})
export class SimilarStocksOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  similarStockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  score?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SimilarStocksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SimilarStocksAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SimilarStocksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SimilarStocksMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SimilarStocksSumOrderByAggregateInput | undefined;
}
