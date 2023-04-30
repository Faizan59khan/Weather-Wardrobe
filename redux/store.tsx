import { configureStore } from '@reduxjs/toolkit';
import {
  generalReducer,

} from '../redux/index';

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});
