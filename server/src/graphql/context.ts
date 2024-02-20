import { Container, inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "../services/types";
import { IStockService, IUserService } from "../services/interfaces";
import { Request, Response } from "express";

export const Type = Symbol.for("IContextProvider");

export interface IContextProvider {
  userService: IUserService;
  stockService: IStockService;
}

export interface IContext {
  req: Request;
  res: Response;
  container: IContextProvider;
  userId?: number;
}

@injectable()
class ContextProvider implements IContextProvider {
  @inject(TYPES.IUserService)
  public userService: IUserService;

  @inject(TYPES.IStockService)
  public stockService: IStockService;
}

export default {
  bind(container: Container) {
    container.bind<IContextProvider>(Type).to(ContextProvider).inRequestScope();
  },
};
``;
