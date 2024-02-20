import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryAvgOrderByAggregateInput } from "../inputs/StockHistoryAvgOrderByAggregateInput";
import { StockHistoryCountOrderByAggregateInput } from "../inputs/StockHistoryCountOrderByAggregateInput";
import { StockHistoryMaxOrderByAggregateInput } from "../inputs/StockHistoryMaxOrderByAggregateInput";
import { StockHistoryMinOrderByAggregateInput } from "../inputs/StockHistoryMinOrderByAggregateInput";
import { StockHistorySumOrderByAggregateInput } from "../inputs/StockHistorySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StockHistoryOrderByWithAggregationInput", {
  isAbstract: true
})
export class StockHistoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StockHistoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StockHistoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StockHistoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StockHistoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StockHistoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StockHistorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StockHistorySumOrderByAggregateInput | undefined;
}
