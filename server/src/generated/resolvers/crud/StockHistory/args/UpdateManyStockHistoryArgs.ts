import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryUpdateManyMutationInput } from "../../../inputs/StockHistoryUpdateManyMutationInput";
import { StockHistoryWhereInput } from "../../../inputs/StockHistoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStockHistoryArgs {
  @TypeGraphQL.Field(_type => StockHistoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: StockHistoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  where?: StockHistoryWhereInput | undefined;
}
