import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: []
  },

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload)
    },

    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  }
});

export const { addContact, removeContact } = contactsSlice.actions;