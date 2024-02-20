import { Box, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRefreshData } from "../../hooks/useRefreshData";
import ErrorModal from "../ErrorModal/ErrorModal";
import {
  RefreshInterval,
  TRefreshInterval,
} from "../RefreshButton/RefreshButton";
import { StockCardView } from "../StockCard";
import { Toolbar } from "../Toolbar/Toolbar";

export const DashboardView: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState<TRefreshInterval>(
    RefreshInterval.INTERVAL_1_MINUTE
  );

  const {
    stockData,
    loading,
    addStock,
    removeStock,
    refreshEnabled,
    setRefreshEnabled,
    error,
    acknowledgeError,
  } = useRefreshData(refreshInterval);

  useEffect(() => {
    if (error) {
      setShowModal(true);
    }
  }, [error]);

  return (
    <Box>
      <Toolbar
        addStock={addStock}
        refreshInterval={refreshInterval}
        setRefreshInterval={setRefreshInterval}
        refreshEnabled={refreshEnabled}
        setRefreshEnabled={setRefreshEnabled}
      />
      {loading ? (
        <Flex w="100%" h="80vh" justifyContent="center" alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Flex mt="30px" justifyContent="center">
          <Flex wrap="wrap" justifyContent="flex-start" w="90%">
            {Object.keys(stockData).map((symbol) => {
              return (
                <StockCardView
                  key={symbol}
                  data={stockData[symbol]}
                  addStock={addStock}
                  removeStock={removeStock}
                />
              );
            })}
          </Flex>
        </Flex>
      )}
      <ErrorModal
        message={error}
        showModal={showModal}
        setShowModal={setShowModal}
        acknowledgeError={acknowledgeError}
      />
    </Box>
  );
};
