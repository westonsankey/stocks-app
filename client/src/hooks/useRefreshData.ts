import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import {
  AddStockDocument,
  AddStockMutation,
  GetStockSummaryDocument,
  GetStockSummaryQuery,
  GetUserStocksDocument,
  GetUserStocksQuery,
  RemoveStockDocument,
  RemoveStockMutation,
} from "../graphql/generated/graphql";
import { TRefreshInterval } from "../components/RefreshButton/RefreshButton";
import { TStockData } from "../components/StockCard";

export const useRefreshData = (refreshInterval: TRefreshInterval) => {
  const [error, setError] = useState("");
  const [refreshEnabled, setRefreshEnabled] = useState(false);
  const [addStockMutation] = useMutation<AddStockMutation>(AddStockDocument);
  const [removeStockMutation] =
    useMutation<RemoveStockMutation>(RemoveStockDocument);

  const { data: userData, refetch: refetchUserData } =
    useQuery<GetUserStocksQuery>(GetUserStocksDocument);

  const tickerSymbols = useMemo(() => {
    return userData?.userStocks
      ? userData.userStocks.map((stock) => stock.tickerSymbol)
      : [];
  }, [userData]);

  const {
    data,
    loading,
    refetch: refetchStockData,
  } = useQuery<GetStockSummaryQuery>(
    GetStockSummaryDocument,
    tickerSymbols.length > 0
      ? {
          variables: {
            tickerSymbols: tickerSymbols.map((t) => ({ tickerSymbol: t })),
          },
        }
      : { skip: true }
  );

  useEffect(() => {
    if (refreshEnabled) {
      const interval = setInterval(() => {
        if (!loading) {
          refetchStockData();
        }
      }, refreshInterval.intervalMs);

      return () => clearInterval(interval);
    }
  }, [refreshEnabled]);

  const addStock = (symbol: string) => {
    addStockMutation({ variables: { tickerSymbol: symbol } })
      .then(() => refetchUserData())
      .then(() => refetchStockData())
      .catch((err: ApolloError) => {
        setError(err.message);
      });
  };

  const removeStock = (symbol: string) => {
    removeStockMutation({ variables: { tickerSymbol: symbol } }).then(() => {
      refetchUserData().then(() => refetchStockData());
    });
  };

  const acknowledgeError = () => {
    setError("");
  };

  const stockData = useMemo(() => {
    if (data) {
      return data.getStockSummary.reduce((acc, stock) => {
        acc[stock.tickerSymbol] = {
          ...stock,
          history: stock.history.map((record) => ({
            x: record.date,
            y: record.price,
          })),
        };
        return acc;
      }, {} as Record<string, TStockData>);
    }

    return {};
  }, [data]);

  return {
    stockData,
    loading,
    error,
    acknowledgeError,
    addStock,
    removeStock,
    refreshEnabled,
    setRefreshEnabled,
  };
};
