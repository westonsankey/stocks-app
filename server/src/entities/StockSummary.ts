import { Field, ObjectType } from "type-graphql";
import { Stock, StockHistory } from "../generated";

@ObjectType()
export class StockHistoryResponse extends StockHistory {}

@ObjectType()
export class StockSummaryResponse extends Stock {
  @Field(() => [StockHistory])
  history!: StockHistory[];
}
