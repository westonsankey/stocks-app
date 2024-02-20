import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksWhereInput } from "../inputs/SimilarStocksWhereInput";

@TypeGraphQL.InputType("SimilarStocksListRelationFilter", {
  isAbstract: true
})
export class SimilarStocksListRelationFilter {
  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  every?: SimilarStocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  some?: SimilarStocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksWhereInput, {
    nullable: true
  })
  none?: SimilarStocksWhereInput | undefined;
}
