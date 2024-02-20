import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockHistoryCreateManyStockInput } from "../inputs/StockHistoryCreateManyStockInput";

@TypeGraphQL.InputType("StockHistoryCreateManyStockInputEnvelope", {
  isAbstract: true
})
export class StockHistoryCreateManyStockInputEnvelope {
  @TypeGraphQL.Field(_type => [StockHistoryCreateManyStockInput], {
    nullable: false
  })
  data!: StockHistoryCreateManyStockInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
