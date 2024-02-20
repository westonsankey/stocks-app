import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksUpdateManyMutationInput } from "../../../inputs/SimilarStocksUpdateManyMutationInput";
import { SimilarStocksWhereInput } from "../../../inputs/SimilarStocksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksUpdateManyMutationInput, {
    nullable: false
  })
  data!: SimilarStocksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  where?: SimilarStocksWhereInput | undefined;
}
