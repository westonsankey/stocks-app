import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksCreateInput } from "../../../inputs/SimilarStocksCreateInput";
import { SimilarStocksUpdateInput } from "../../../inputs/SimilarStocksUpdateInput";
import { SimilarStocksWhereUniqueInput } from "../../../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: false
  })
  where!: SimilarStocksWhereUniqueInput;

  @TypeGraphQL.Field(_type => SimilarStocksCreateInput, {
    nullable: false
  })
  create!: SimilarStocksCreateInput;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateInput, {
    nullable: false
  })
  update!: SimilarStocksUpdateInput;
}
