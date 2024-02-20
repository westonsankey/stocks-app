import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String'];
  user: AuthPayloadUser;
};

export type AuthPayloadUser = {
  __typename?: 'AuthPayloadUser';
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addStock: Scalars['Boolean'];
  login: AuthPayload;
  logout: Scalars['Boolean'];
  refreshAccessToken: AuthPayload;
  register: AuthPayload;
  removeStock: Scalars['Boolean'];
};


export type MutationAddStockArgs = {
  tickerSymbol: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  yahooFinanceApiKey: Scalars['String'];
};


export type MutationRemoveStockArgs = {
  tickerSymbol: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getSimilarStocks: Array<SimilarStockResponse>;
  getStockSummary: Array<StockSummaryResponse>;
  isLoggedIn: Scalars['Boolean'];
  userStocks: Array<Stock>;
};


export type QueryGetSimilarStocksArgs = {
  tickerSymbol: TickerSymbol;
};


export type QueryGetStockSummaryArgs = {
  tickerSymbols: Array<TickerSymbol>;
};

export type SimilarStockResponse = {
  __typename?: 'SimilarStockResponse';
  score: Scalars['String'];
  symbol: Scalars['String'];
};

export type Stock = {
  __typename?: 'Stock';
  _count?: Maybe<StockCount>;
  id: Scalars['Int'];
  tickerSymbol: Scalars['String'];
};

export type StockCount = {
  __typename?: 'StockCount';
  history: Scalars['Int'];
  isSimilarTo: Scalars['Int'];
  similarStocks: Scalars['Int'];
  users: Scalars['Int'];
};

export type StockHistory = {
  __typename?: 'StockHistory';
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  price: Scalars['Decimal'];
  stockId: Scalars['Int'];
};

export type StockSummaryResponse = {
  __typename?: 'StockSummaryResponse';
  businessSummary: Scalars['String'];
  companyName: Scalars['String'];
  grossProfit: Scalars['String'];
  history: Array<StockHistory>;
  id: Scalars['Int'];
  lastRefreshed: Scalars['DateTime'];
  marketCap: Scalars['String'];
  regularMarketChange: Scalars['Float'];
  regularMarketChangePercent: Scalars['String'];
  regularMarketPrice: Scalars['Decimal'];
  revenueGrowth: Scalars['String'];
  stockId: Scalars['Int'];
  tickerSymbol: Scalars['String'];
  totalRevenue: Scalars['String'];
};

export type TickerSymbol = {
  tickerSymbol: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', accessToken: string, user: { __typename?: 'AuthPayloadUser', email: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  yahooFinanceApiKey: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthPayload', accessToken: string, user: { __typename?: 'AuthPayloadUser', email: string } } };

export type RefreshAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken: { __typename?: 'AuthPayload', accessToken: string, user: { __typename?: 'AuthPayloadUser', email: string } } };

export type IsLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type IsLoggedInQuery = { __typename?: 'Query', isLoggedIn: boolean };

export type AddStockMutationVariables = Exact<{
  tickerSymbol: Scalars['String'];
}>;


export type AddStockMutation = { __typename?: 'Mutation', addStock: boolean };

export type RemoveStockMutationVariables = Exact<{
  tickerSymbol: Scalars['String'];
}>;


export type RemoveStockMutation = { __typename?: 'Mutation', removeStock: boolean };

export type GetStockSummaryQueryVariables = Exact<{
  tickerSymbols: Array<TickerSymbol> | TickerSymbol;
}>;


export type GetStockSummaryQuery = { __typename?: 'Query', getStockSummary: Array<{ __typename?: 'StockSummaryResponse', tickerSymbol: string, businessSummary: string, companyName: string, grossProfit: string, marketCap: string, regularMarketChange: number, regularMarketChangePercent: string, totalRevenue: string, revenueGrowth: string, regularMarketPrice: any, lastRefreshed: any, history: Array<{ __typename?: 'StockHistory', date: any, price: any }> }> };

export type GetUserStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserStocksQuery = { __typename?: 'Query', userStocks: Array<{ __typename?: 'Stock', id: number, tickerSymbol: string }> };

export type GetSimilarStocksQueryVariables = Exact<{
  tickerSymbol: TickerSymbol;
}>;


export type GetSimilarStocksQuery = { __typename?: 'Query', getSimilarStocks: Array<{ __typename?: 'SimilarStockResponse', symbol: string, score: string }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yahooFinanceApiKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"yahooFinanceApiKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yahooFinanceApiKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const RefreshAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const IsLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLoggedIn"}}]}}]} as unknown as DocumentNode<IsLoggedInQuery, IsLoggedInQueryVariables>;
export const AddStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tickerSymbol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbol"}}}]}]}}]} as unknown as DocumentNode<AddStockMutation, AddStockMutationVariables>;
export const RemoveStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeStock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tickerSymbol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbol"}}}]}]}}]} as unknown as DocumentNode<RemoveStockMutation, RemoveStockMutationVariables>;
export const GetStockSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStockSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbols"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TickerSymbol"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStockSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tickerSymbols"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbols"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tickerSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"businessSummary"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"grossProfit"}},{"kind":"Field","name":{"kind":"Name","value":"marketCap"}},{"kind":"Field","name":{"kind":"Name","value":"regularMarketChange"}},{"kind":"Field","name":{"kind":"Name","value":"regularMarketChangePercent"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"revenueGrowth"}},{"kind":"Field","name":{"kind":"Name","value":"regularMarketPrice"}},{"kind":"Field","name":{"kind":"Name","value":"lastRefreshed"}},{"kind":"Field","name":{"kind":"Name","value":"history"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<GetStockSummaryQuery, GetStockSummaryQueryVariables>;
export const GetUserStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tickerSymbol"}}]}}]}}]} as unknown as DocumentNode<GetUserStocksQuery, GetUserStocksQueryVariables>;
export const GetSimilarStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSimilarStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TickerSymbol"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSimilarStocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tickerSymbol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tickerSymbol"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<GetSimilarStocksQuery, GetSimilarStocksQueryVariables>;