import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../interface/modal";

const initialState: ModalState = {
  isOpen: false,
  type: null,
  data: null,
};

const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.data = action.payload.data ?? null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
