import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

type TErrorModalProps = {
  message: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  acknowledgeError: () => void;
};

const ErrorModal: React.FC<TErrorModalProps> = ({
  message,
  showModal,
  setShowModal,
  acknowledgeError,
}) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
        acknowledgeError();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{message}</ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              setShowModal(false);
              acknowledgeError();
            }}
          >
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
