import { PrismaPromise } from "@prisma/client";
import { Stock, StockHistory, User } from "../generated";
import { TRecommendedSymbol } from "./types";

export interface IUserService {
  findAll(): PrismaPromise<User[]>;

  register(
    email: string,
    password: string,
    yahooFinanceApiKey: string
  ): Promise<{ accessToken: string; refreshToken: string; user: User }>;

  login(
    email: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string; user: User }>;

  logout(refreshToken: string): Promise<Boolean>;

  refreshAccessToken(
    refreshToken: string
  ): Promise<{ accessToken: string; user: Pick<User, "email"> }>;

  addStock(uesrId: number, tickerSymbol: string): Promise<User>;

  removeStock(userId: number, tickerSymbol: string): Promise<Boolean>;

  getUserStocks(userId: number): Promise<Stock[]>;

  userHasYahooApiKey(userId: number): Promise<Boolean>;
}

export interface IStockService {
  addStock(userId: number, tickerSymbol: string): Promise<Boolean>;

  getSummary(
    userId: number,
    tickerSymbol: string
  ): Promise<Stock & { history: StockHistory[] }>;

  getSimilarStocks(
    userId: number,
    tickerSymbol: string
  ): Promise<TRecommendedSymbol[]>;
}
