import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksCreateManyInput } from "../../../inputs/SimilarStocksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySimilarStocksArgs {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateManyInput], {
    nullable: false
  })
  data!: SimilarStocksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
