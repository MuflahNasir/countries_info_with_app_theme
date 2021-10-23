import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeText: "Dark Mode",
  themeMode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.themeMode = action.payload.mode;
      state.themeText = action.payload.text;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
