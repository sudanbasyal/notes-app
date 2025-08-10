import { createSlice } from "@reduxjs/toolkit";
import { NoteSlice } from "../../interface/note";

const initialState: NoteSlice = {
  search: "",
  sortBy: "createdAt",
  orderBy: "DESC",
  categoryId: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setOrder: (state, action) => {
      state.orderBy = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { setSearch, setSortBy, setOrder, setCategoryId } =
  noteSlice.actions;
export default noteSlice.reducer;
