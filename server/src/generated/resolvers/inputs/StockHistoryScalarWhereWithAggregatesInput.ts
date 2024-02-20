import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("StockHistoryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StockHistoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StockHistoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StockHistoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StockHistoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  stockId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  price?: DecimalWithAggregatesFilter | undefined;
}
