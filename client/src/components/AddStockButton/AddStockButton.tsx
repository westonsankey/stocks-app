import { Box } from "@chakra-ui/layout";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { AutocompleteInput } from "../AutocompleteInput";

type TAddStockButton = {
  addStock: (symbol: string) => void;
};

export const AddStockButton: React.FC<TAddStockButton> = ({
  addStock,
}: TAddStockButton) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [symbol, setSymbol] = useState("");

  return (
    <>
      <Button bg="secondary" color="white" onClick={onOpen}>
        Add Stock
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Stock</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AutocompleteInput symbol={symbol} setSymbol={setSymbol} />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} size="sm">
              Cancel
            </Button>
            <Button
              size="sm"
              bg="secondary"
              color="#FFF"
              onClick={() => {
                addStock(symbol);
                setSymbol("");
                onClose();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
