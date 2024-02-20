import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutSimilarStocksInput } from "../inputs/StockCreateOrConnectWithoutSimilarStocksInput";
import { StockCreateWithoutSimilarStocksInput } from "../inputs/StockCreateWithoutSimilarStocksInput";
import { StockUpdateWithoutSimilarStocksInput } from "../inputs/StockUpdateWithoutSimilarStocksInput";
import { StockUpsertWithoutSimilarStocksInput } from "../inputs/StockUpsertWithoutSimilarStocksInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockUpdateOneRequiredWithoutSimilarStocksInput", {
  isAbstract: true
})
export class StockUpdateOneRequiredWithoutSimilarStocksInput {
  @TypeGraphQL.Field(_type => StockCreateWithoutSimilarStocksInput, {
    nullable: true
  })
  create?: StockCreateWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => StockCreateOrConnectWithoutSimilarStocksInput, {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => StockUpsertWithoutSimilarStocksInput, {
    nullable: true
  })
  upsert?: StockUpsertWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: true
  })
  connect?: StockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StockUpdateWithoutSimilarStocksInput, {
    nullable: true
  })
  update?: StockUpdateWithoutSimilarStocksInput | undefined;
}
