import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockHistoryCreateManyInput } from "../../../inputs/StockHistoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStockHistoryArgs {
  @TypeGraphQL.Field(_type => [StockHistoryCreateManyInput], {
    nullable: false
  })
  data!: StockHistoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
