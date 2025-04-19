import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

// export const phonebookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case removeContact.type:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case setFilter.type:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const phonebookReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(removeContact, (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});
