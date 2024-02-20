import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryOrderByWithRelationInput } from "../../../inputs/StockHistoryOrderByWithRelationInput";
import { StockHistoryWhereInput } from "../../../inputs/StockHistoryWhereInput";
import { StockHistoryWhereUniqueInput } from "../../../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  where?: StockHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StockHistoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StockHistoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: StockHistoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
