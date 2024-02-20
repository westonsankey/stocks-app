import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockOrderByWithRelationInput } from "../inputs/StockOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SimilarStocksOrderByWithRelationInput", {
  isAbstract: true
})
export class SimilarStocksOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StockOrderByWithRelationInput, {
    nullable: true
  })
  stock?: StockOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  similarStockId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StockOrderByWithRelationInput, {
    nullable: true
  })
  similarStock?: StockOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  score?: "asc" | "desc" | undefined;
}
