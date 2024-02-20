import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateOrConnectWithoutHistoryInput } from "../inputs/StockCreateOrConnectWithoutHistoryInput";
import { StockCreateWithoutHistoryInput } from "../inputs/StockCreateWithoutHistoryInput";
import { StockUpdateWithoutHistoryInput } from "../inputs/StockUpdateWithoutHistoryInput";
import { StockUpsertWithoutHistoryInput } from "../inputs/StockUpsertWithoutHistoryInput";
import { StockWhereUniqueInput } from "../inputs/StockWhereUniqueInput";

@TypeGraphQL.InputType("StockUpdateOneRequiredWithoutHistoryInput", {
  isAbstract: true
})
export class StockUpdateOneRequiredWithoutHistoryInput {
  @TypeGraphQL.Field(_type => StockCreateWithoutHistoryInput, {
    nullable: true
  })
  create?: StockCreateWithoutHistoryInput | undefined;

  @TypeGraphQL.Field(_type => StockCreateOrConnectWithoutHistoryInput, {
    nullable: true
  })
  connectOrCreate?: StockCreateOrConnectWithoutHistoryInput | undefined;

  @TypeGraphQL.Field(_type => StockUpsertWithoutHistoryInput, {
    nullable: true
  })
  upsert?: StockUpsertWithoutHistoryInput | undefined;

  @TypeGraphQL.Field(_type => StockWhereUniqueInput, {
    nullable: true
  })
  connect?: StockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StockUpdateWithoutHistoryInput, {
    nullable: true
  })
  update?: StockUpdateWithoutHistoryInput | undefined;
}
