import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateWithoutSimilarStocksInput } from "../inputs/StockCreateWithoutSimilarStocksInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockCreateOrConnectWithoutSimilarStocksInput", {
  isAbstract: true
})
export class StockCreateOrConnectWithoutSimilarStocksInput {
  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: false
  })
  where!: StockWhereUniqueInput;

  @TypeGraphQL.Field(_type => StockCreateWithoutSimilarStocksInput, {
    nullable: false
  })
  create!: StockCreateWithoutSimilarStocksInput;
}
