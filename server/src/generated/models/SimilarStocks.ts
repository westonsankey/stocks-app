import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Stock } from "../models/Stock";

@TypeGraphQL.ObjectType("SimilarStocks", {
  isAbstract: true
})
export class SimilarStocks {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stockId!: number;

  stock?: Stock;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  similarStockId!: number;

  similarStock?: Stock;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  score!: Prisma.Decimal;
}
