import { configureStore } from "@reduxjs/toolkit";
import { otherSliceReducer } from "./otherSlice";
import { sliceReducer } from "./slice";

export const store = configureStore({
  reducer: {
    slice: sliceReducer,
    otherSlice: otherSliceReducer,
  },
});
