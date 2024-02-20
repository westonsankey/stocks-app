import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SimilarStocksOrderByWithRelationInput } from "../../../inputs/SimilarStocksOrderByWithRelationInput";
import { SimilarStocksWhereInput } from "../../../inputs/SimilarStocksWhereInput";
import { SimilarStocksWhereUniqueInput } from "../../../inputs/SimilarStocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSimilarStocksArgs {
  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  where?: SimilarStocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SimilarStocksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksWhereUniqueInput, {
    nullable: true
  })
  cursor?: SimilarStocksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
