import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authenticateSlice';
import reducer from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: reducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
