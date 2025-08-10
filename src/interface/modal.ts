type ModalType = "edit-categories" | "add-note" | "edit-note" | "delete-note";

export interface ModalState {
  isOpen: boolean;
  type: ModalType | null;
  data?: unknown;
}
