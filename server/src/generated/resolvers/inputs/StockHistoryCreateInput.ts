import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StockCreateNestedOneWithoutHistoryInput } from "../inputs/StockCreateNestedOneWithoutHistoryInput";

@TypeGraphQL.InputType("StockHistoryCreateInput", {
  isAbstract: true
})
export class StockHistoryCreateInput {
  @TypeGraphQL.Field(_type => StockCreateNestedOneWithoutHistoryInput, {
    nullable: false
  })
  stock!: StockCreateNestedOneWithoutHistoryInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;
}
