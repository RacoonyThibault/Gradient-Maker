import { configureStore } from "@reduxjs/toolkit";
import gradient from "./features/gradientSlice";

export const store = configureStore({
  reducer: {
    gradient,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
