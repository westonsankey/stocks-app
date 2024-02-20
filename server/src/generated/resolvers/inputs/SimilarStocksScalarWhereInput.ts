import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SimilarStocksScalarWhereInput", {
  isAbstract: true
})
export class SimilarStocksScalarWhereInput {
  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereInput], {
    nullable: true
  })
  AND?: SimilarStocksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereInput], {
    nullable: true
  })
  OR?: SimilarStocksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SimilarStocksScalarWhereInput], {
    nullable: true
  })
  NOT?: SimilarStocksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stockId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  similarStockId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  score?: DecimalFilter | undefined;
}
