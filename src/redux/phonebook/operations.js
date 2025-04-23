import axios from 'axios';
import {
  addContact,
  clearError,
  fetchIsDone,
  isError,
  isLoading,
  removeContact,
} from './slice';

axios.defaults.baseURL = 'https://65e5d392d7f0758a76e78670.mockapi.io/';
// contacts
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(isLoading(true));
    const { data } = await axios.get('/contacts');
    dispatch(fetchIsDone(data));
  } catch (error) {
    dispatch(isError(error.message));
  }
};

export const deleteContactThunk = id => async dispatch => {
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContact(id));
    dispatch(clearError());
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch(removeContact(id));
      dispatch(clearError());
    } else {
      dispatch(isError(error.message));
    }
  }
};

export const addContactThunk = body => async dispatch => {
  try {
    const { data } = await axios.post('/contacts', body);
    dispatch(addContact(data));
  } catch (error) {
    dispatch(isError(error.message));
  }
};
