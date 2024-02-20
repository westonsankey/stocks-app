import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockWhereInput } from "../inputs/StockWhereInput";

@TypeGraphQL.InputType("StockListRelationFilter", {
  isAbstract: true
})
export class StockListRelationFilter {
  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  every?: StockWhereInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  some?: StockWhereInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  none?: StockWhereInput | undefined;
}
