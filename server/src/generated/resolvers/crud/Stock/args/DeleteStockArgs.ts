import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockWhereUniqueInput } from "../../../inputs/StockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStockArgs {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;
}
