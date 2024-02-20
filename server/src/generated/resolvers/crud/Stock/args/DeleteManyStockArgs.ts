import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockWhereInput } from "../../../inputs/StockWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStockArgs {
  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  where?: StockWhereInput | undefined;
}
