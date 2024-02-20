import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryWhereInput } from "../../../inputs/StockHistoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  where?: StockHistoryWhereInput | undefined;
}
