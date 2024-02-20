import * as jwt from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { IContext } from "../graphql/context";

export const isAuthenticated: MiddlewareFn<IContext> = ({ context }, next) => {
  const token = context.req.headers.authorization;
  let isVerified = false;
  let authError = "";

  if (!token) {
    throw new Error("No access token");
  }

  try {
    const verified = jwt.verify(
      token.replace("Bearer ", ""),
      "ACCESS_TOKEN_SECRET"
    );

    if (typeof verified === "object") {
      context.userId = parseInt(verified["userId"]);
      isVerified = true;
    }
  } catch (err) {
    console.log("jwt verificatipn failed:", err);
    authError = "jwt verification failed";
  }

  if (isVerified) {
    return next();
  } else {
    throw new Error(authError);
  }
};
