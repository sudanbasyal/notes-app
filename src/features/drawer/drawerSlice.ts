import { createSlice } from "@reduxjs/toolkit";
import { DrawerState } from "../../interface/drawer";

const initialState: DrawerState = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: "Drawer",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.isOpen = action.payload;
      
    },
    
  },
});

export const { openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
