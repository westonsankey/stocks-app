import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksOrderByWithAggregationInput } from "../../../inputs/SimilarStocksOrderByWithAggregationInput";
import { SimilarStocksScalarWhereWithAggregatesInput } from "../../../inputs/SimilarStocksScalarWhereWithAggregatesInput";
import { SimilarStocksWhereInput } from "../../../inputs/SimilarStocksWhereInput";
import { SimilarStocksScalarFieldEnum } from "../../../../enums/SimilarStocksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  where?: SimilarStocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SimilarStocksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"stockId" | "similarStockId" | "score">;

  @TypeGraphQL.Field(_type => SimilarStocksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SimilarStocksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
