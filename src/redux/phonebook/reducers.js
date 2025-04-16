import { REMOVE_CONTACT } from './constans';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
