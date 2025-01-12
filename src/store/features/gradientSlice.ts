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
      const color = state.colors.find((c) => c.id === action.payload.id);
      if (color) {
        color.value = action.payload.value;
      }
    },
    addColor: (
      state,
    )=>{
      if (state.colors.length === 5)return 
      state.colors.push({
        id: state.colors.length > 0 
        ?state.colors[state.colors.length - 1].id + 1 
        : 1,
        value: "#111",
        position: + 0.1 * state.colors[state.colors.length - 1].
        position
      })
    },
    removeColor: (state)=> {
      if (state.colors.length === 2)return
      state.colors.pop()
    },
    updateAngle: (state, action: PayloadAction<number>)=>{
      state.angle =action.payload
    },
    pickColor: (state, action: PayloadAction<number>)=>{
      state.pickedColorId = action.payload
    },
    updateColorPosition: (state, action: PayloadAction<number>) => {
      const currentColor = state.colors.find(
        (color) => color.id === state.pickedColorId
      );
      if (currentColor) {
        currentColor.position = action.payload;
      } else {
        console.warn(`Color with ID ${state.pickedColorId} not found.`);
      }
    },
  },
});

export const { uptdateColorValue, addColor, removeColor, updateAngle, pickColor,updateColorPosition } = gradientSlice.actions;

export default gradientSlice.reducer;
