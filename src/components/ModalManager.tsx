import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { useTypedSelector } from "../store";
import CategoryForm from "./forms/CategoryForm";
import Modal from "./ui/Modal";

const ModalManager = () => {
  const { isOpen, type, data } = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  const ModalContent = {
    "edit-categories": <CategoryForm />,
  };

  if (!isOpen || !type) return null;
  return (
    <Modal isModalOpen={isOpen} onClose={handleClose}>
      {ModalContent[type as keyof typeof ModalContent]}
    </Modal>
  );
};

export default ModalManager;
