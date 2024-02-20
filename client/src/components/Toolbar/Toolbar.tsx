import { Box, Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { AddStockButton } from "../AddStockButton";
import {
  RefreshButton,
  TRefreshInterval,
} from "../RefreshButton/RefreshButton";

type TToolbarProps = {
  addStock: (symbol: string) => void;
  refreshInterval: TRefreshInterval | undefined;
  setRefreshInterval: React.Dispatch<React.SetStateAction<TRefreshInterval>>;
  refreshEnabled: boolean;
  setRefreshEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Toolbar: React.FC<TToolbarProps> = ({
  addStock,
  refreshInterval,
  setRefreshInterval,
  refreshEnabled,
  setRefreshEnabled,
}) => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      gap={10}
      ml="30px"
      pt="30px"
    >
      <AddStockButton addStock={addStock} />
      <Box>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="stock-refresh" mb="0">
            Enable refresh?
          </FormLabel>
          <Switch
            id="stock-refresh"
            onChange={(e) => setRefreshEnabled(e.target.checked)}
          />
        </FormControl>
      </Box>

      <RefreshButton
        refreshInterval={refreshInterval}
        setRefreshInterval={setRefreshInterval}
        enabled={refreshEnabled}
      />
    </Flex>
  );
};
