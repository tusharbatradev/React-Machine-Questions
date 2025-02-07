import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      const index = action.payload;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    },
  },
});

export const { addItem, deleteItem } = listSlice.actions;
export default listSlice.reducer;
