import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksCreateInput } from "../../../inputs/SimilarStocksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksCreateInput, {
    nullable: false
  })
  data!: SimilarStocksCreateInput;
}
