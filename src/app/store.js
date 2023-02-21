import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import themeReducer from "../features/theme";

export const store = configureStore({
  // reducer: takes in some information about the current state
  // and takes some action that you wanna perform on said state
  // and returns the new value of that state
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
