import { useQuery } from "@apollo/client";
import {
  GetSimilarStocksDocument,
  GetSimilarStocksQuery,
} from "../graphql/generated/graphql";

export const useGetSimilarStocks = (symbol: string) => {
  const { data, loading, error } = useQuery<GetSimilarStocksQuery>(
    GetSimilarStocksDocument,
    {
      variables: {
        tickerSymbol: { tickerSymbol: symbol },
      },
    }
  );

  return { loading, error, data };
};
