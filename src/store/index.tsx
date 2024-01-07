import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import uploadSlice from "./slices/upload";

export const store = configureStore({
  reducer: {
    upload: uploadSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
