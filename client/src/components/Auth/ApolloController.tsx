import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  fromPromise,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RefreshAccessTokenDocument } from "../../graphql/generated/graphql";
import { useAuth } from "../../hooks/useAuth";

const ApolloController: React.FC = ({ children }) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  });

  /* eslint-disable */
  let client: ApolloClient<NormalizedCacheObject>;

  const authLink = setContext((_, { headers }) => {
    const token = auth.accessToken;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const getNewToken = async () => {
    const res = await client.mutate({ mutation: RefreshAccessTokenDocument });
    return res.data;
  };

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (
          err.message === "Invalid token" ||
          err.message === "jwt verification failed"
        ) {
          return fromPromise(
            getNewToken().catch(() => {
              setAuth({ accessToken: "", username: "" });
              navigate("/login");
              return;
            })
          )
            .filter((value) => Boolean(value))
            .flatMap((resp) => {
              if (resp) {
                setAuth({
                  accessToken: resp.refreshAccessToken.accessToken,
                  username: resp.refreshAccessToken.user.email,
                });

                const oldHeaders = operation.getContext().headers;
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${resp.refreshAccessToken.accessToken}`,
                  },
                });
              }

              return forward(operation);
            });
        }
      }
    }
  });

  client = new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloController;
