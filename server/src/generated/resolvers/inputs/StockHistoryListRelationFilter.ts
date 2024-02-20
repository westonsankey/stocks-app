import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryWhereInput } from "../inputs/StockHistoryWhereInput";

@TypeGraphQL.InputType("StockHistoryListRelationFilter", {
  isAbstract: true
})
export class StockHistoryListRelationFilter {
  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  every?: StockHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  some?: StockHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => StockHistoryWhereInput, {
    nullable: true
  })
  none?: StockHistoryWhereInput | undefined;
}
