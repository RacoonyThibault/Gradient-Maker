import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GradientState } from "./types";

const initialState: GradientState = {
  colors: [
    { id: 1, value: "#00d2ff", position: 20 },
    {
      id: 2,
      value: "#ee0ca7",
      position: 50,
    },
  ],
  pickedColorId: 1,
  angle: 60,
};

export const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    uptdateColorValue: (
      state,
      action: PayloadAction<{ id: number; value: string }>
    ) => {
      const currentColor = state.colors.find(
        (color) => color.id === action.payload.id
      );
      if (currentColor) {
        currentColor.value = action.payload.value;
      } else {
        console.warn(`Color with ID ${action.payload.id} not found.`);
      }
    },
  },
});

export const { uptdateColorValue } = gradientSlice.actions;

export default gradientSlice.reducer;
