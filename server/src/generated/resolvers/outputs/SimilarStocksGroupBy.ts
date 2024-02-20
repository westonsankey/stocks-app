import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksAvgAggregate } from "../outputs/SimilarStocksAvgAggregate";
import { SimilarStocksCountAggregate } from "../outputs/SimilarStocksCountAggregate";
import { SimilarStocksMaxAggregate } from "../outputs/SimilarStocksMaxAggregate";
import { SimilarStocksMinAggregate } from "../outputs/SimilarStocksMinAggregate";
import { SimilarStocksSumAggregate } from "../outputs/SimilarStocksSumAggregate";

@TypeGraphQL.ObjectType("SimilarStocksGroupBy", {
  isAbstract: true
})
export class SimilarStocksGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stockId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  similarStockId!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  score!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => SimilarStocksCountAggregate, {
    nullable: true
  })
  _count!: SimilarStocksCountAggregate | null;

  @TypeGraphQL.Field(_type => SimilarStocksAvgAggregate, {
    nullable: true
  })
  _avg!: SimilarStocksAvgAggregate | null;

  @TypeGraphQL.Field(_type => SimilarStocksSumAggregate, {
    nullable: true
  })
  _sum!: SimilarStocksSumAggregate | null;

  @TypeGraphQL.Field(_type => SimilarStocksMinAggregate, {
    nullable: true
  })
  _min!: SimilarStocksMinAggregate | null;

  @TypeGraphQL.Field(_type => SimilarStocksMaxAggregate, {
    nullable: true
  })
  _max!: SimilarStocksMaxAggregate | null;
}
