import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    fetchIsDone: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    },
    isLoading: (state, { payload }) => {
      state.contacts.isLoading = true;
    },
    isError: (state, { payload }) => {
      state.contacts.error = payload;
    },
    clearError: state => {
      state.contacts.error = null;
    },
    addContact: (state, { payload }) => {
      state.contacts.items.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== payload
      );
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      });
  },
  selectors: {
    selectContacts: state => state.contacts.items,
    selectFilter: state => state.filter,
    selectIsLoading: state => state.contacts.isLoading,
    selectError: state => state.contacts.error,
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
