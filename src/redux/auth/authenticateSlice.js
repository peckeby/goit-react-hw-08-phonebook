import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { Report } from 'notiflix/build/notiflix-report-aio';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Report.success('Welcome!', `${state.user.name}`, 'Okey');
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        Report.failure(
          'Ooops, you can not register due to an error:',
          `${state.error}`,
          'Okey'
        );
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        Report.success(
          'Hello again!',
          `nice to see you ${state.user.name}`,
          'Okey'
        );
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        Report.failure(
          'Ooops, you can not log in due to an error:',
          `${state.error}`,
          'Okey'
        );
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        Report.success('Hope to see you again!');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        Report.success('Hello again!', `${state.user.name}`, 'Okey');
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
