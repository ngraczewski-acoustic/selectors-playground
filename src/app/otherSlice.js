import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otherValue: false,
};

export const otherSlice = createSlice({
  name: "otherSlice",
  initialState,
  reducers: {
    toggleOtherValue: (state) => ({
      ...state,
      isFetchingFields: !state.otherValue,
    }),
  },
});

export const otherSliceReducer = otherSlice.reducer;
export const otherSliceActions = otherSlice.actions;
