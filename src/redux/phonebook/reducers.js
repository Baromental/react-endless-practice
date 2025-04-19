import { addContact, removeContact, setFilter } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case removeContact.type:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case setFilter.type:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
