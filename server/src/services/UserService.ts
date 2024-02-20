import { PrismaClient, PrismaPromise } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { injectable } from "inversify";
import * as jwt from "jsonwebtoken";
import { User } from "../generated";
import { IUserService } from "./interfaces";

const prisma = new PrismaClient();

@injectable()
export default class UserService implements IUserService {
  public findAll(): PrismaPromise<User[]> {
    return prisma.user.findMany();
  }

  public async register(
    email: string,
    password: string,
    yahooFinanceApiKey: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, yahooFinanceApiKey },
    });

    if (user.id) {
      const accessToken = jwt.sign({ userId: user.id }, "ACCESS_TOKEN_SECRET", {
        expiresIn: 5,
      });

      const refreshToken = jwt.sign(
        { userId: user.id },
        "REFRESH_TOKEN_SECRET",
        {
          expiresIn: 60 * 60 * 24 * 7, // 7 days
        }
      );

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken,
        },
      });

      return {
        accessToken,
        refreshToken,
        user,
      };
    } else {
      throw new Error("Registration failure");
    }
  }

  public async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Invalid login");
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid login");
    }

    const accessToken = jwt.sign({ userId: user.id }, "ACCESS_TOKEN_SECRET", {
      expiresIn: "1 day",
    });

    const refreshToken = jwt.sign({ userId: user.id }, "REFRESH_TOKEN_SECRET", {
      expiresIn: "7 days",
    });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  public async logout(refreshToken: string): Promise<Boolean> {
    const user = await prisma.user.findFirst({
      where: {
        refreshToken,
      },
    });

    if (user) {
      const res = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: null,
        },
      });

      return res.refreshToken === null;
    }

    return Promise.resolve(true);
  }

  public async refreshAccessToken(refreshToken: string): Promise<{
    accessToken: string;
    user: Pick<User, "email">;
  }> {
    const user = await prisma.user.findFirst({
      where: {
        refreshToken,
      },
    });

    if (!user) {
      throw new Error("Invalid refresh token");
    }

    try {
      var decoded = jwt.verify(refreshToken, "REFRESH_TOKEN_SECRET");

      if (typeof decoded === "object") {
        const accessToken = jwt.sign(
          { userId: decoded.userId },
          "ACCESS_TOKEN_SECRET",
          {
            expiresIn: "1 day",
          }
        );

        return {
          accessToken,
          user: {
            email: user.email,
          },
        };
      } else {
        throw new Error("Invalid refresh token");
      }
    } catch (err) {
      throw new Error("Invalid refresh token");
    }
  }

  public async addStock(userId: number, tickerSymbol: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        stocks: {
          connect: {
            tickerSymbol,
          },
        },
      },
    });
  }

  public async removeStock(
    userId: number,
    tickerSymbol: string
  ): Promise<Boolean> {
    const update = prisma.user.update({
      where: { id: userId },
      data: {
        stocks: {
          disconnect: {
            tickerSymbol,
          },
        },
      },
    });

    return update.then(() => true).catch((err) => false);
  }

  public async getUserStocks(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { stocks: true },
    });

    return user?.stocks || [];
  }

  public async userHasYahooApiKey(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user && user.yahooFinanceApiKey) {
      return true;
    }

    return false;
  }
}
