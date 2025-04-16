import { ADD_CONTACT, REMOVE_CONTACT } from './constans';

export const removeContact = id => ({ type: REMOVE_CONTACT, payload: id });
export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
