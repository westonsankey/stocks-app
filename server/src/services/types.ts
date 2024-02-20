const TYPES = {
  IUserService: Symbol.for("IUserService"),
  IStockService: Symbol.for("IStockService"),
};

type TRecommendedSymbol = {
  score: number;
  symbol: string;
};

export type TStockHistoryResponse = {
  [symbol: string]: {
    dataGranularity: number;
    timestamp: number[];
    symbol: string;
    close: number[];
    end: any;
    start: any;
    previousClose: any;
    chartPreviousClose: any;
  };
};

export type TStockHistory = {
  x: string;
  y: number;
}[];

export { TYPES, TRecommendedSymbol };
