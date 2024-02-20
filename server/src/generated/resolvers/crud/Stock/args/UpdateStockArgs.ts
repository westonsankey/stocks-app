import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockUpdateInput } from "../../../inputs/StockUpdateInput";
import { StockWhereUniqueInput } from "../../../inputs/StockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStockArgs {
  @TypeGraphQL.Field(_type => StockUpdateInput, {
    nullable: false
  })
  data!: StockUpdateInput;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;
}
