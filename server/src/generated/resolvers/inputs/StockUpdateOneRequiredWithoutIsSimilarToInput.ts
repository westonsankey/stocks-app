import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutIsSimilarToInput } from "../inputs/StockCreateOrConnectWithoutIsSimilarToInput";
import { StockCreateWithoutIsSimilarToInput } from "../inputs/StockCreateWithoutIsSimilarToInput";
import { StockUpdateWithoutIsSimilarToInput } from "../inputs/StockUpdateWithoutIsSimilarToInput";
import { StockUpsertWithoutIsSimilarToInput } from "../inputs/StockUpsertWithoutIsSimilarToInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockUpdateOneRequiredWithoutIsSimilarToInput", {
  isAbstract: true
})
export class StockUpdateOneRequiredWithoutIsSimilarToInput {
  @TypeGraphQL.Field(_type => StockCreateWithoutIsSimilarToInput, {
    nullable: true
  })
  create?: StockCreateWithoutIsSimilarToInput | undefined;

  @TypeGraphQL.Field(_type => StockCreateOrConnectWithoutIsSimilarToInput, {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutIsSimilarToInput | undefined;

  @TypeGraphQL.Field(_type => StockUpsertWithoutIsSimilarToInput, {
    nullable: true
  })
  upsert?: StockUpsertWithoutIsSimilarToInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: true
  })
  connect?: StockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StockUpdateWithoutIsSimilarToInput, {
    nullable: true
  })
  update?: StockUpdateWithoutIsSimilarToInput | undefined;
}
