import * as jwt from "jsonwebtoken";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Stock, User } from "../generated";
import { IContext } from "../graphql/context";
import { isAuthenticated } from "../middleware/isAuthenticated";

@ObjectType()
export class AuthPayloadUser {
  @Field()
  email: string;
}

@ObjectType()
class AuthPayload {
  @Field()
  accessToken: string;

  @Field()
  user: AuthPayloadUser;
}

@Resolver(User)
export class UserResolver {
  @Query(() => Boolean)
  async isLoggedIn(@Ctx() ctx: IContext): Promise<Boolean> {
    const auth = ctx.req.headers.authorization;
    if (!auth) return false;

    const token = auth.replace("Bearer ", "");
    jwt.verify(token, "ACCESS_TOKEN_SECRET", (err, decoded) => {
      if (err) {
        return false;
      }
      return true;
    });
    return false;
  }

  @Query(() => [Stock])
  @UseMiddleware(isAuthenticated)
  async userStocks(@Ctx() ctx: IContext): Promise<Stock[]> {
    return ctx.container.userService.getUserStocks(ctx.userId!);
  }

  @Mutation(() => AuthPayload)
  async refreshAccessToken(@Ctx() ctx: IContext): Promise<AuthPayload> {
    if (!ctx.req.cookies?.jwt) {
      throw new Error("Unauthorized");
    }

    return ctx.container.userService.refreshAccessToken(ctx.req.cookies.jwt);
  }

  @Mutation(() => AuthPayload)
  async register(
    @Ctx() ctx: IContext,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("yahooFinanceApiKey") yahooFinanceApiKey: string
  ): Promise<AuthPayload> {
    const { accessToken, refreshToken, user } =
      await ctx.container.userService.register(
        email,
        password,
        yahooFinanceApiKey
      );

    ctx.res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    return { accessToken, user };
  }

  @Mutation(() => AuthPayload)
  async login(
    @Ctx() ctx: IContext,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<AuthPayload> {
    const { accessToken, refreshToken, user } =
      await ctx.container.userService.login(email, password);

    ctx.res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    return { accessToken, user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() ctx: IContext) {
    ctx.res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return ctx.container.userService.logout(ctx.req.cookies.jwt);
  }
}
