import { IUpload } from "@/types/upload";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUpload[] = [];

export const sliceUpload = createSlice({
  name: "upload",
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IUpload>) => {
      state.push(action.payload);
    },
    onDelete: (state, action: PayloadAction<IUpload["fileKey"]>) => {
      state.filter((item) => item.fileKey !== action.payload);
    },
  },
});

export const { onDelete, onSave } = sliceUpload.actions;

export default sliceUpload.reducer;
