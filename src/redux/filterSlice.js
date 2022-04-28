import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
    initialState: {
        value: ''
  },

  reducers: {
    filteredContacts(state, action) {
      state.value = action.payload;
    }
  }
});

export const {filteredContacts } = filterSlice.actions;
