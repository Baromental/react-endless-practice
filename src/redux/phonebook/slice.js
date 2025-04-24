import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

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
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.loading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
        state.loading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.loading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.loading = false;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
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
