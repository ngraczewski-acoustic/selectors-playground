import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  isFetchingFields: false,
  isFetchingCountries: false,
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleIsFetchingFields: (state) => ({
      ...state,
      isFetchingFields: !state.isFetchingFields,
    }),
    toggleIsFetchingCountries: (state) => ({
      ...state,
      isFetchingCountries: !state.isFetchingCountries,
    }),
  },
});

const selectSelf = (state) => state;
const selectSlice = (state) => state.slice;
const selectIsFetchingFields = (state) => selectSlice(state).isFetchingFields;

const mSelectSlice = createSelector(selectSelf, (state) => state.slice);
const mSelectIsFetchingFields = createSelector(
  mSelectSlice,
  (slice) => slice.isFetchingFields
);

const selectIsFetchingFieldsAsObject = (state) => ({
  isFetchingFields: selectIsFetchingFields(state),
});

const mSelectIsFetchingFieldsAsObject = createSelector(
  selectIsFetchingFields,
  (isFetchingFields) => ({
    isFetchingFields,
  })
);

export const sliceSelectors = {
  selectIsFetchingFields,
  mSelectIsFetchingFields,
  selectIsFetchingFieldsAsObject,
  mSelectIsFetchingFieldsAsObject,
};
export const sliceReducer = slice.reducer;
export const sliceActions = slice.actions;
