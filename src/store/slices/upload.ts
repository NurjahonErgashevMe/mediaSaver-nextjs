import { IUpload } from "@/types/upload";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUpload[] = [];

export const sliceUpload = createSlice({
  name: "upload",
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IUpload>) => {
    return  state.push(action.payload);
    },
    onDelete: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.fileKey != action.payload);
    },
    onChange: (state, action: PayloadAction<IUpload>) => {
      const index = state.findIndex(
        (item) => item.fileKey === action.payload.fileKey
      );

      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { onDelete, onSave, onChange } = sliceUpload.actions;

export default sliceUpload.reducer;
