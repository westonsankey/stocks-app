import { MiddlewareFn } from "type-graphql";
import { IContext } from "../graphql/context";

export const hasYahooApiToken: MiddlewareFn<IContext> = async (
  { context },
  next
) => {
  if (context.userId) {
    const hasApiKey = await context.container.userService.userHasYahooApiKey(
      context.userId
    );

    if (hasApiKey) {
      return next();
    }
  }

  throw new Error("No Yahoo API key");
};
