import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutSimilarStocksInput } from "../inputs/StockCreateOrConnectWithoutSimilarStocksInput";
import { StockCreateWithoutSimilarStocksInput } from "../inputs/StockCreateWithoutSimilarStocksInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateNestedOneWithoutSimilarStocksInput", {
  isAbstract: true
})
export class StockCreateNestedOneWithoutSimilarStocksInput {
  @TypeGraphQL.Field(_type => StockCreateWithoutSimilarStocksInput, {
    nullable: true
  })
  create?: StockCreateWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => StockCreateOrConnectWithoutSimilarStocksInput, {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutSimilarStocksInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: true
  })
  connect?: StockWhereUniqueInput | undefined;
}
