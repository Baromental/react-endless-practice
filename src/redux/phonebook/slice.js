import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
      reducer: (state, { payload }) => {
        console.log('ADDING CONTACT:', payload);
        state.contacts.push(payload);
      },
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    selectContacts: state => state.contacts,
    selectFilter: state => state.filter,
  },
});

export const phonebookReducer = slice.reducer;
export const { addContact, removeContact, setFilter } = slice.actions;
export const { selectContacts, selectFilter } = slice.selectors;
