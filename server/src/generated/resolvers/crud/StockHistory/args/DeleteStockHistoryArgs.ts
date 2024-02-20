import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryWhereUniqueInput } from "../../../inputs/StockHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: StockHistoryWhereUniqueInput;
}
