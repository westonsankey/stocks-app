import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryOrderByWithAggregationInput } from "../../../inputs/StockHistoryOrderByWithAggregationInput";
import { StockHistoryScalarWhereWithAggregatesInput } from "../../../inputs/StockHistoryScalarWhereWithAggregatesInput";
import { StockHistoryWhereInput } from "../../../inputs/StockHistoryWhereInput";
import { StockHistoryScalarFieldEnum } from "../../../../enums/StockHistoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  where?: StockHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StockHistoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "stockId" | "date" | "price">;

  @TypeGraphQL.Field(_type => StockHistoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StockHistoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
