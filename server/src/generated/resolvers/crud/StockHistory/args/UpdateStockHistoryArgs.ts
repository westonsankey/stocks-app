import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryUpdateInput } from "../../../inputs/StockHistoryUpdateInput";
import { StockHistoryWhereUniqueInput } from "../../../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryUpdateInput, {
    nullable: false
  })
  data!: StockHistoryUpdateInput;

  @TypeGraphQL.Field(_type => StockHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: StockHistoryWhereUniqueInput;
}
