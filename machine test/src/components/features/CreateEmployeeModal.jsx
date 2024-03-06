import { useContext } from "react";
import CreateEmployee from "./CreateEmployee";
import { ApiContext } from "../ApiContext";

const CreateEmployeeModal = ({ isOpen, onClose }) => {
  console.log(mode);
  const { closeModal } = useContext(ApiContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <CreateEmployee />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CreateEmployeeModal;
