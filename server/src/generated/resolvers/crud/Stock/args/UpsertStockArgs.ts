import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockCreateInput } from "../../../inputs/StockCreateInput";
import { StockUpdateInput } from "../../../inputs/StockUpdateInput";
import { StockWhereUniqueInput } from "../../../inputs/StockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStockArgs {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockCreateInput, {
    nullable: false
  })
  create!: StockCreateInput;

  @TypeGraphQL.Field(_type => StockUpdateInput, {
    nullable: false
  })
  update!: StockUpdateInput;
}
