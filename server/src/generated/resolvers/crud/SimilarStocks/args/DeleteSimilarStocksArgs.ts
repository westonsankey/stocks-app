import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksWhereUniqueInput } from "../../../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;
}
