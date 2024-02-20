import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksAvgAggregate } from "../outputs/SimilarStocksAvgAggregate";
import { SimilarStocksCountAggregate } from "../outputs/SimilarStocksCountAggregate";
import { SimilarStocksMaxAggregate } from "../outputs/SimilarStocksMaxAggregate";
import { SimilarStocksMinAggregate } from "../outputs/SimilarStocksMinAggregate";
import { SimilarStocksSumAggregate } from "../outputs/SimilarStocksSumAggregate";

@TypeGraphQL.ObjectType("AggregateSimilarStocks", {
  isAbstract: true
})
export class AggregateSimilarStocks {
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
