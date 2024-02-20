import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SimilarStocksListRelationFilter } from "../inputs/SimilarStocksListRelationFilter";
import { StockHistoryListRelationFilter } from "../inputs/StockHistoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("StockWhereInput", {
  isAbstract: true
})
export class StockWhereInput {
  @TypeGraphQL.Field(_type => [StockWhereInput], {
    nullable: true
  })
  AND?: StockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereInput], {
    nullable: true
  })
  OR?: StockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StockWhereInput], {
    nullable: true
  })
  NOT?: StockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tickerSymbol?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  companyName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  businessSummary?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  grossProfit?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  marketCap?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  regularMarketChange?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  regularMarketChangePercent?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  regularMarketPrice?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  revenueGrowth?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  totalRevenue?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  lastRefreshed?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StockHistoryListRelationFilter, {
    nullable: true
  })
  history?: StockHistoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksListRelationFilter, {
    nullable: true
  })
  similarStocks?: SimilarStocksListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksListRelationFilter, {
    nullable: true
  })
  isSimilarTo?: SimilarStocksListRelationFilter | undefined;
}
