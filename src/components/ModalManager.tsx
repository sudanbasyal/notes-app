import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { useTypedSelector } from "../store";
import CategoryForm from "./forms/CategoryForm";
import Modal from "./ui/Modal";
import NoteForm from "./forms/NoteForm";
import { Note } from "../interface/note";

const ModalManager = () => {
  const { isOpen, type, data } = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  const ModalContent = {
    "edit-categories": <CategoryForm />,
    "add-note": <NoteForm onClose={handleClose} />,
    "edit-note": <NoteForm data={data as Note} onClose={handleClose} />,
  };

  if (!isOpen || !type) return null;
  return (
    <Modal isModalOpen={isOpen} onClose={handleClose}>
      {ModalContent[type as keyof typeof ModalContent]}
    </Modal>
  );
};

export default ModalManager;
