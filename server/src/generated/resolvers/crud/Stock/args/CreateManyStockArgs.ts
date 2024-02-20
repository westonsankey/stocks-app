import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockCreateManyInput } from "../../../inputs/StockCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStockArgs {
  @TypeGraphQL.Field(_type => [StockCreateManyInput], {
    nullable: false
  })
  data!: StockCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
