import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { container } from "./config/container";
import { IContextProvider } from "./graphql/context";
import { UserResolver } from "./resolvers/user";
import cors from "cors";
import { StockResolver } from "./resolvers/stock";
const cookieParser = require("cookie-parser");

async function startServer() {
  const app = express();
  const port = 4000;

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(cookieParser());

  const schema = await buildSchema({
    resolvers: [UserResolver, StockResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
      container: container.get<IContextProvider>(
        Symbol.for("IContextProvider")
      ),
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer();
