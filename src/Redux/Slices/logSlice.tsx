import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '', // For demo only; avoid in production
  isLoggedIn: false,
};

const logSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { login, logout, updateUsername, updatePassword } = logSlice.actions;
export default logSlice.reducer;
