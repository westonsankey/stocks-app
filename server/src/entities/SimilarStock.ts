import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SimilarStockResponse {
  @Field()
  score!: string;

  @Field()
  symbol!: string;
}
