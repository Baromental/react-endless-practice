const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  loading: false,
  error: false,
  isLoggedIn: false,
};

const authSlice = {
  name: 'auth',
  initialState,
};

export const authReducer = authSlice.reducer;
