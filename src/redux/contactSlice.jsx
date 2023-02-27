import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: initialState,

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    searchContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact, searchContact } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
