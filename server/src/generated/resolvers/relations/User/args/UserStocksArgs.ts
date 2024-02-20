import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StockOrderByWithRelationInput } from "../../../inputs/StockOrderByWithRelationInput";
import { StockWhereInput } from "../../../inputs/StockWhereInput";
import { StockWhereUniqueInput } from "../../../inputs/StockWhereUniqueInput";
import { StockScalarFieldEnum } from "../../../../enums/StockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserStocksArgs {
  @TypeGraphQL.Field(_type => StockWhereInput, {
    nullable: true
  })
  where?: StockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StockOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StockOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: true
  })
  cursor?: StockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StockScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tickerSymbol" | "companyName" | "businessSummary" | "grossProfit" | "marketCap" | "regularMarketChange" | "regularMarketChangePercent" | "regularMarketPrice" | "revenueGrowth" | "totalRevenue" | "lastRefreshed"> | undefined;
}
