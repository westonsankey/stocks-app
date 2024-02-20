import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockCreateInput } from "../../../inputs/StockCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStockArgs {
  @TypeGraphQL.Field(_type => StockCreateInput, {
    nullable: false
  })
  data!: StockCreateInput;
}
