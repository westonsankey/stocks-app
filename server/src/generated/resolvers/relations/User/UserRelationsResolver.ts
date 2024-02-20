import * as TypeGraphQL from "type-graphql";
import { Stock } from "../../../models/Stock";
import { User } from "../../../models/User";
import { UserStocksArgs } from "./args/UserStocksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Stock], {
    nullable: false
  })
  async stocks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserStocksArgs): Promise<Stock[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).stocks(args);
  }
}
