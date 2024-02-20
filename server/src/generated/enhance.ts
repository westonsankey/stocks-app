import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Stock: crudResolvers.StockCrudResolver,
  SimilarStocks: crudResolvers.SimilarStocksCrudResolver,
  StockHistory: crudResolvers.StockHistoryCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Stock: {
    stock: actionResolvers.FindUniqueStockResolver,
    findFirstStock: actionResolvers.FindFirstStockResolver,
    stocks: actionResolvers.FindManyStockResolver,
    createStock: actionResolvers.CreateStockResolver,
    createManyStock: actionResolvers.CreateManyStockResolver,
    deleteStock: actionResolvers.DeleteStockResolver,
    updateStock: actionResolvers.UpdateStockResolver,
    deleteManyStock: actionResolvers.DeleteManyStockResolver,
    updateManyStock: actionResolvers.UpdateManyStockResolver,
    upsertStock: actionResolvers.UpsertStockResolver,
    aggregateStock: actionResolvers.AggregateStockResolver,
    groupByStock: actionResolvers.GroupByStockResolver
  },
  SimilarStocks: {
    findUniqueSimilarStocks: actionResolvers.FindUniqueSimilarStocksResolver,
    findFirstSimilarStocks: actionResolvers.FindFirstSimilarStocksResolver,
    findManySimilarStocks: actionResolvers.FindManySimilarStocksResolver,
    createSimilarStocks: actionResolvers.CreateSimilarStocksResolver,
    createManySimilarStocks: actionResolvers.CreateManySimilarStocksResolver,
    deleteSimilarStocks: actionResolvers.DeleteSimilarStocksResolver,
    updateSimilarStocks: actionResolvers.UpdateSimilarStocksResolver,
    deleteManySimilarStocks: actionResolvers.DeleteManySimilarStocksResolver,
    updateManySimilarStocks: actionResolvers.UpdateManySimilarStocksResolver,
    upsertSimilarStocks: actionResolvers.UpsertSimilarStocksResolver,
    aggregateSimilarStocks: actionResolvers.AggregateSimilarStocksResolver,
    groupBySimilarStocks: actionResolvers.GroupBySimilarStocksResolver
  },
  StockHistory: {
    stockHistory: actionResolvers.FindUniqueStockHistoryResolver,
    findFirstStockHistory: actionResolvers.FindFirstStockHistoryResolver,
    stockHistories: actionResolvers.FindManyStockHistoryResolver,
    createStockHistory: actionResolvers.CreateStockHistoryResolver,
    createManyStockHistory: actionResolvers.CreateManyStockHistoryResolver,
    deleteStockHistory: actionResolvers.DeleteStockHistoryResolver,
    updateStockHistory: actionResolvers.UpdateStockHistoryResolver,
    deleteManyStockHistory: actionResolvers.DeleteManyStockHistoryResolver,
    updateManyStockHistory: actionResolvers.UpdateManyStockHistoryResolver,
    upsertStockHistory: actionResolvers.UpsertStockHistoryResolver,
    aggregateStockHistory: actionResolvers.AggregateStockHistoryResolver,
    groupByStockHistory: actionResolvers.GroupByStockHistoryResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Stock: ["stock", "findFirstStock", "stocks", "createStock", "createManyStock", "deleteStock", "updateStock", "deleteManyStock", "updateManyStock", "upsertStock", "aggregateStock", "groupByStock"],
  SimilarStocks: ["findUniqueSimilarStocks", "findFirstSimilarStocks", "findManySimilarStocks", "createSimilarStocks", "createManySimilarStocks", "deleteSimilarStocks", "updateSimilarStocks", "deleteManySimilarStocks", "updateManySimilarStocks", "upsertSimilarStocks", "aggregateSimilarStocks", "groupBySimilarStocks"],
  StockHistory: ["stockHistory", "findFirstStockHistory", "stockHistories", "createStockHistory", "createManyStockHistory", "deleteStockHistory", "updateStockHistory", "deleteManyStockHistory", "updateManyStockHistory", "upsertStockHistory", "aggregateStockHistory", "groupByStockHistory"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStockArgs: ["where"],
  FindFirstStockArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStockArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStockArgs: ["data"],
  CreateManyStockArgs: ["data", "skipDuplicates"],
  DeleteStockArgs: ["where"],
  UpdateStockArgs: ["data", "where"],
  DeleteManyStockArgs: ["where"],
  UpdateManyStockArgs: ["data", "where"],
  UpsertStockArgs: ["where", "create", "update"],
  AggregateStockArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStockArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSimilarStocksArgs: ["where"],
  FindFirstSimilarStocksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySimilarStocksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSimilarStocksArgs: ["data"],
  CreateManySimilarStocksArgs: ["data", "skipDuplicates"],
  DeleteSimilarStocksArgs: ["where"],
  UpdateSimilarStocksArgs: ["data", "where"],
  DeleteManySimilarStocksArgs: ["where"],
  UpdateManySimilarStocksArgs: ["data", "where"],
  UpsertSimilarStocksArgs: ["where", "create", "update"],
  AggregateSimilarStocksArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySimilarStocksArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStockHistoryArgs: ["where"],
  FindFirstStockHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStockHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStockHistoryArgs: ["data"],
  CreateManyStockHistoryArgs: ["data", "skipDuplicates"],
  DeleteStockHistoryArgs: ["where"],
  UpdateStockHistoryArgs: ["data", "where"],
  DeleteManyStockHistoryArgs: ["where"],
  UpdateManyStockHistoryArgs: ["data", "where"],
  UpsertStockHistoryArgs: ["where", "create", "update"],
  AggregateStockHistoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStockHistoryArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Stock: relationResolvers.StockRelationsResolver,
  SimilarStocks: relationResolvers.SimilarStocksRelationsResolver,
  StockHistory: relationResolvers.StockHistoryRelationsResolver
};
const relationResolversInfo = {
  User: ["stocks"],
  Stock: ["users", "history", "similarStocks", "isSimilarTo"],
  SimilarStocks: ["stock", "similarStock"],
  StockHistory: ["stock"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  Stock: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  SimilarStocks: ["stockId", "similarStockId", "score"],
  StockHistory: ["id", "stockId", "date", "price"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStock: ["_count", "_avg", "_sum", "_min", "_max"],
  StockGroupBy: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSimilarStocks: ["_count", "_avg", "_sum", "_min", "_max"],
  SimilarStocksGroupBy: ["stockId", "similarStockId", "score", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStockHistory: ["_count", "_avg", "_sum", "_min", "_max"],
  StockHistoryGroupBy: ["id", "stockId", "date", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["stocks"],
  UserCountAggregate: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  UserMaxAggregate: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  StockCount: ["users", "history", "similarStocks", "isSimilarTo"],
  StockCountAggregate: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "_all"],
  StockAvgAggregate: ["id", "regularMarketChange", "regularMarketPrice"],
  StockSumAggregate: ["id", "regularMarketChange", "regularMarketPrice"],
  StockMinAggregate: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  StockMaxAggregate: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  SimilarStocksCountAggregate: ["stockId", "similarStockId", "score", "_all"],
  SimilarStocksAvgAggregate: ["stockId", "similarStockId", "score"],
  SimilarStocksSumAggregate: ["stockId", "similarStockId", "score"],
  SimilarStocksMinAggregate: ["stockId", "similarStockId", "score"],
  SimilarStocksMaxAggregate: ["stockId", "similarStockId", "score"],
  StockHistoryCountAggregate: ["id", "stockId", "date", "price", "_all"],
  StockHistoryAvgAggregate: ["id", "stockId", "price"],
  StockHistorySumAggregate: ["id", "stockId", "price"],
  StockHistoryMinAggregate: ["id", "stockId", "date", "price"],
  StockHistoryMaxAggregate: ["id", "stockId", "date", "price"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "yahooFinanceApiKey", "refreshToken", "stocks"],
  UserOrderByWithRelationInput: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken", "stocks"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  StockWhereInput: ["AND", "OR", "NOT", "id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "similarStocks", "isSimilarTo"],
  StockOrderByWithRelationInput: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "similarStocks", "isSimilarTo"],
  StockWhereUniqueInput: ["id", "tickerSymbol"],
  StockOrderByWithAggregationInput: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "_count", "_avg", "_max", "_min", "_sum"],
  StockScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  SimilarStocksWhereInput: ["AND", "OR", "NOT", "stockId", "stock", "similarStockId", "similarStock", "score"],
  SimilarStocksOrderByWithRelationInput: ["stockId", "stock", "similarStockId", "similarStock", "score"],
  SimilarStocksWhereUniqueInput: ["stockId_similarStockId"],
  SimilarStocksOrderByWithAggregationInput: ["stockId", "similarStockId", "score", "_count", "_avg", "_max", "_min", "_sum"],
  SimilarStocksScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "stockId", "similarStockId", "score"],
  StockHistoryWhereInput: ["AND", "OR", "NOT", "id", "stockId", "stock", "date", "price"],
  StockHistoryOrderByWithRelationInput: ["id", "stockId", "stock", "date", "price"],
  StockHistoryWhereUniqueInput: ["id"],
  StockHistoryOrderByWithAggregationInput: ["id", "stockId", "date", "price", "_count", "_avg", "_max", "_min", "_sum"],
  StockHistoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "stockId", "date", "price"],
  UserCreateInput: ["email", "password", "yahooFinanceApiKey", "refreshToken", "stocks"],
  UserUpdateInput: ["email", "password", "yahooFinanceApiKey", "refreshToken", "stocks"],
  UserCreateManyInput: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  UserUpdateManyMutationInput: ["email", "password", "yahooFinanceApiKey", "refreshToken"],
  StockCreateInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "similarStocks", "isSimilarTo"],
  StockUpdateInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "similarStocks", "isSimilarTo"],
  StockCreateManyInput: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  StockUpdateManyMutationInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  SimilarStocksCreateInput: ["stock", "similarStock", "score"],
  SimilarStocksUpdateInput: ["stock", "similarStock", "score"],
  SimilarStocksCreateManyInput: ["stockId", "similarStockId", "score"],
  SimilarStocksUpdateManyMutationInput: ["score"],
  StockHistoryCreateInput: ["stock", "date", "price"],
  StockHistoryUpdateInput: ["stock", "date", "price"],
  StockHistoryCreateManyInput: ["id", "stockId", "date", "price"],
  StockHistoryUpdateManyMutationInput: ["date", "price"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StockListRelationFilter: ["every", "some", "none"],
  StockOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  UserMinOrderByAggregateInput: ["id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  StockHistoryListRelationFilter: ["every", "some", "none"],
  SimilarStocksListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  StockHistoryOrderByRelationAggregateInput: ["_count"],
  SimilarStocksOrderByRelationAggregateInput: ["_count"],
  StockCountOrderByAggregateInput: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  StockAvgOrderByAggregateInput: ["id", "regularMarketChange", "regularMarketPrice"],
  StockMaxOrderByAggregateInput: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  StockMinOrderByAggregateInput: ["id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  StockSumOrderByAggregateInput: ["id", "regularMarketChange", "regularMarketPrice"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StockRelationFilter: ["is", "isNot"],
  SimilarStocksStockIdSimilarStockIdCompoundUniqueInput: ["stockId", "similarStockId"],
  SimilarStocksCountOrderByAggregateInput: ["stockId", "similarStockId", "score"],
  SimilarStocksAvgOrderByAggregateInput: ["stockId", "similarStockId", "score"],
  SimilarStocksMaxOrderByAggregateInput: ["stockId", "similarStockId", "score"],
  SimilarStocksMinOrderByAggregateInput: ["stockId", "similarStockId", "score"],
  SimilarStocksSumOrderByAggregateInput: ["stockId", "similarStockId", "score"],
  StockHistoryCountOrderByAggregateInput: ["id", "stockId", "date", "price"],
  StockHistoryAvgOrderByAggregateInput: ["id", "stockId", "price"],
  StockHistoryMaxOrderByAggregateInput: ["id", "stockId", "date", "price"],
  StockHistoryMinOrderByAggregateInput: ["id", "stockId", "date", "price"],
  StockHistorySumOrderByAggregateInput: ["id", "stockId", "price"],
  StockCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  StockUpdateManyWithoutUsersInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedManyWithoutStocksInput: ["create", "connectOrCreate", "connect"],
  StockHistoryCreateNestedManyWithoutStockInput: ["create", "connectOrCreate", "createMany", "connect"],
  SimilarStocksCreateNestedManyWithoutSimilarStockInput: ["create", "connectOrCreate", "createMany", "connect"],
  SimilarStocksCreateNestedManyWithoutStockInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutStocksInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StockHistoryUpdateManyWithoutStockInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SimilarStocksUpdateManyWithoutSimilarStockInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SimilarStocksUpdateManyWithoutStockInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StockCreateNestedOneWithoutIsSimilarToInput: ["create", "connectOrCreate", "connect"],
  StockCreateNestedOneWithoutSimilarStocksInput: ["create", "connectOrCreate", "connect"],
  StockUpdateOneRequiredWithoutIsSimilarToInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StockUpdateOneRequiredWithoutSimilarStocksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StockCreateNestedOneWithoutHistoryInput: ["create", "connectOrCreate", "connect"],
  StockUpdateOneRequiredWithoutHistoryInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StockCreateWithoutUsersInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "history", "similarStocks", "isSimilarTo"],
  StockCreateOrConnectWithoutUsersInput: ["where", "create"],
  StockUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  StockUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  StockUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  StockScalarWhereInput: ["AND", "OR", "NOT", "id", "tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed"],
  UserCreateWithoutStocksInput: ["email", "password", "yahooFinanceApiKey", "refreshToken"],
  UserCreateOrConnectWithoutStocksInput: ["where", "create"],
  StockHistoryCreateWithoutStockInput: ["date", "price"],
  StockHistoryCreateOrConnectWithoutStockInput: ["where", "create"],
  StockHistoryCreateManyStockInputEnvelope: ["data", "skipDuplicates"],
  SimilarStocksCreateWithoutSimilarStockInput: ["stock", "score"],
  SimilarStocksCreateOrConnectWithoutSimilarStockInput: ["where", "create"],
  SimilarStocksCreateManySimilarStockInputEnvelope: ["data", "skipDuplicates"],
  SimilarStocksCreateWithoutStockInput: ["similarStock", "score"],
  SimilarStocksCreateOrConnectWithoutStockInput: ["where", "create"],
  SimilarStocksCreateManyStockInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutStocksInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutStocksInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutStocksInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "yahooFinanceApiKey", "refreshToken"],
  StockHistoryUpsertWithWhereUniqueWithoutStockInput: ["where", "update", "create"],
  StockHistoryUpdateWithWhereUniqueWithoutStockInput: ["where", "data"],
  StockHistoryUpdateManyWithWhereWithoutStockInput: ["where", "data"],
  StockHistoryScalarWhereInput: ["AND", "OR", "NOT", "id", "stockId", "date", "price"],
  SimilarStocksUpsertWithWhereUniqueWithoutSimilarStockInput: ["where", "update", "create"],
  SimilarStocksUpdateWithWhereUniqueWithoutSimilarStockInput: ["where", "data"],
  SimilarStocksUpdateManyWithWhereWithoutSimilarStockInput: ["where", "data"],
  SimilarStocksScalarWhereInput: ["AND", "OR", "NOT", "stockId", "similarStockId", "score"],
  SimilarStocksUpsertWithWhereUniqueWithoutStockInput: ["where", "update", "create"],
  SimilarStocksUpdateWithWhereUniqueWithoutStockInput: ["where", "data"],
  SimilarStocksUpdateManyWithWhereWithoutStockInput: ["where", "data"],
  StockCreateWithoutIsSimilarToInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "similarStocks"],
  StockCreateOrConnectWithoutIsSimilarToInput: ["where", "create"],
  StockCreateWithoutSimilarStocksInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "isSimilarTo"],
  StockCreateOrConnectWithoutSimilarStocksInput: ["where", "create"],
  StockUpsertWithoutIsSimilarToInput: ["update", "create"],
  StockUpdateWithoutIsSimilarToInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "similarStocks"],
  StockUpsertWithoutSimilarStocksInput: ["update", "create"],
  StockUpdateWithoutSimilarStocksInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "history", "isSimilarTo"],
  StockCreateWithoutHistoryInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "similarStocks", "isSimilarTo"],
  StockCreateOrConnectWithoutHistoryInput: ["where", "create"],
  StockUpsertWithoutHistoryInput: ["update", "create"],
  StockUpdateWithoutHistoryInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "users", "similarStocks", "isSimilarTo"],
  StockUpdateWithoutUsersInput: ["tickerSymbol", "companyName", "businessSummary", "grossProfit", "marketCap", "regularMarketChange", "regularMarketChangePercent", "regularMarketPrice", "revenueGrowth", "totalRevenue", "lastRefreshed", "history", "similarStocks", "isSimilarTo"],
  StockHistoryCreateManyStockInput: ["id", "date", "price"],
  SimilarStocksCreateManySimilarStockInput: ["stockId", "score"],
  SimilarStocksCreateManyStockInput: ["similarStockId", "score"],
  UserUpdateWithoutStocksInput: ["email", "password", "yahooFinanceApiKey", "refreshToken"],
  StockHistoryUpdateWithoutStockInput: ["date", "price"],
  SimilarStocksUpdateWithoutSimilarStockInput: ["stock", "score"],
  SimilarStocksUpdateWithoutStockInput: ["similarStock", "score"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

