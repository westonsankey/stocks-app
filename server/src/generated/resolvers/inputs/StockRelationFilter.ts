import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockWhereInput } from "../inputs/StockWhereInput";

@TypeGraphQL.InputType("StockRelationFilter", {
  isAbstract: true
})
export class StockRelationFilter {
  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  is?: StockWhereInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  isNot?: StockWhereInput | undefined;
}
