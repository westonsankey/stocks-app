import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("StockHistoryScalarWhereInput", {
  isAbstract: true
})
export class StockHistoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereInput], {
    nullable: true
  })
  AND?: StockHistoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereInput], {
    nullable: true
  })
  OR?: StockHistoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockHistoryScalarWhereInput], {
    nullable: true
  })
  NOT?: StockHistoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stockId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  price?: DecimalFilter | undefined;
}
