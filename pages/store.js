import { configureStore } from '@reduxjs/toolkit';
import {
  generalReducer,
  onboardingReducer,
  userReducer,
  organizationReducer,
  categoryReducer,
  restaurantsReducer,
  menuReducer
} from '@redux/index';

export const store = configureStore({
  reducer: {
    user: userReducer,
    general: generalReducer,
    category: categoryReducer,
    restaurants: restaurantsReducer,
    menu: menuReducer
  },
});
