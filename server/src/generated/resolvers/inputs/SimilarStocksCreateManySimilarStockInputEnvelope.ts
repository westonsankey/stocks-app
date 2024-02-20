import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateManySimilarStockInput } from "../inputs/SimilarStocksCreateManySimilarStockInput";

@TypeGraphQL.InputType("SimilarStocksCreateManySimilarStockInputEnvelope", {
  isAbstract: true
})
export class SimilarStocksCreateManySimilarStockInputEnvelope {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateManySimilarStockInput], {
    nullable: false
  })
  data!: SimilarStocksCreateManySimilarStockInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
