import { Container } from "inversify";
import { IStockService, IUserService } from "./interfaces";
import StockService from "./StockService";
import { TYPES } from "./types";
import UserService from "./UserService";

export const bind = (container: Container) => {
  container
    .bind<IUserService>(TYPES.IUserService)
    .to(UserService)
    .inRequestScope();

  container
    .bind<IStockService>(TYPES.IStockService)
    .to(StockService)
    .inRequestScope();
};

export { IUserService };
