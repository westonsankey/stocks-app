import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SimilarStocksCreateManyStockInput } from "../inputs/SimilarStocksCreateManyStockInput";

@TypeGraphQL.InputType("SimilarStocksCreateManyStockInputEnvelope", {
  isAbstract: true
})
export class SimilarStocksCreateManyStockInputEnvelope {
  @TypeGraphQL.Field(_type => [SimilarStocksCreateManyStockInput], {
    nullable: false
  })
  data!: SimilarStocksCreateManyStockInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
