// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { contactsApi } from 'axiosConfug/contactsApi';

// export const registerThunk = createAsyncThunk(
//   'register',
//   async (credentials, thunkApi) => {
//     try {
//       const { data } = await contactsApi.post('/users/signup', credentials);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
