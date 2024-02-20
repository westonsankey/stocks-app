import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksUpdateInput } from "../../../inputs/SimilarStocksUpdateInput";
import { SimilarStocksWhereUniqueInput } from "../../../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksUpdateInput, {
    nullable: false
  })
  data!: SimilarStocksUpdateInput;

  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;
}
