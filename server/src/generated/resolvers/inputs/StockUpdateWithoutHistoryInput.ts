import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { SimilarStocksUpdateManyWithoutSimilarStockInput } from "../inputs/SimilarStocksUpdateManyWithoutSimilarStockInput";
import { SimilarStocksUpdateManyWithoutStockInput } from "../inputs/SimilarStocksUpdateManyWithoutStockInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutStocksInput } from "../inputs/UserUpdateManyWithoutStocksInput";

@TypeGraphQL.InputType("StockUpdateWithoutHistoryInput", {
  isAbstract: true
})
export class StockUpdateWithoutHistoryInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tickerSymbol?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  companyName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  businessSummary?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  grossProfit?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  marketCap?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  regularMarketChange?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  regularMarketChangePercent?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  regularMarketPrice?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  revenueGrowth?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  totalRevenue?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  lastRefreshed?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutStocksInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutStocksInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateManyWithoutSimilarStockInput, {
    nullable: true
  })
  similarStocks?: SimilarStocksUpdateManyWithoutSimilarStockInput | undefined;

  @TypeGraphQL.Field(_type => SimilarStocksUpdateManyWithoutStockInput, {
    nullable: true
  })
  isSimilarTo?: SimilarStocksUpdateManyWithoutStockInput | undefined;
}
