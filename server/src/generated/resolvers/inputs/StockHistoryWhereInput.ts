import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StockRelationFilter } from "../inputs/StockRelationFilter";

@TypeGraphQL.InputType("StockHistoryWhereInput", {
  isAbstract: true
})
export class StockHistoryWhereInput {
  @TypeGraphQL.Field(_type => [StockHistoryWhereInput], {
    nullable: true
  })
  AND?: StockHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereInput], {
    nullable: true
  })
  OR?: StockHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryWhereInput], {
    nullable: true
  })
  NOT?: StockHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stockId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StockRelationFilter, {
    nullable: true
  })
  stock?: StockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  price?: DecimalFilter | undefined;
}
