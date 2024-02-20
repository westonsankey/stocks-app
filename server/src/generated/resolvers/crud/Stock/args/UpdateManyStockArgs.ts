import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockUpdateManyMutationInput } from "../../../inputs/StockUpdateManyMutationInput";
import { StockWhereInput } from "../../../inputs/StockWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStockArgs {
  @TypeGraphQL.Field(_type => StockUpdateManyMutationInput, {
    nullable: false
  })
  data!: StockUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  where?: StockWhereInput | undefined;
}
