import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksWhereInput } from "../../../inputs/SimilarStocksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  where?: SimilarStocksWhereInput | undefined;
}
