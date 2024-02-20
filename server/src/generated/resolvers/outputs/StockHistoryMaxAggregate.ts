import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("StockHistoryMaxAggregate", {
  isAbstract: true
})
export class StockHistoryMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stockId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  price!: Prisma.Decimal | null;
}
