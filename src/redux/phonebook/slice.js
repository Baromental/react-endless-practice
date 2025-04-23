import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    fetchIsDone: (state, { payload }) => {
      state.contacts = payload;
      state.loading = false;
    },
    isLoading: (state, { payload }) => {
      state.loading = true;
    },
    isError: (state, { payload }) => {
      state.error = payload;
    },
    clearError: state => {
      state.error = null;
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
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
    selectIsLoading: state => state.loading,
    selectError: state => state.error,
  },
});

export const phonebookReducer = slice.reducer;
export const {
  addContact,
  removeContact,
  setFilter,
  fetchIsDone,
  isLoading,
  isError,
  clearError,
} = slice.actions;
export const { selectContacts, selectFilter, selectIsLoading, selectError } =
  slice.selectors;
