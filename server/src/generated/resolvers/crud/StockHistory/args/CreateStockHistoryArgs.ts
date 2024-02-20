import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryCreateInput } from "../../../inputs/StockHistoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryCreateInput, {
    nullable: false
  })
  data!: StockHistoryCreateInput;
}
