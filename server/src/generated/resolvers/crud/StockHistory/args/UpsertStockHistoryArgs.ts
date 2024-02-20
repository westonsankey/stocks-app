import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryCreateInput } from "../../../inputs/StockHistoryCreateInput";
import { StockHistoryUpdateInput } from "../../../inputs/StockHistoryUpdateInput";
import { StockHistoryWhereUniqueInput } from "../../../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: StockHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockHistoryCreateInput, {
    nullable: false
  })
  create!: StockHistoryCreateInput;

  @TypeGraphQL.Field(_type => StockHistoryUpdateInput, {
    nullable: false
  })
  update!: StockHistoryUpdateInput;
}
