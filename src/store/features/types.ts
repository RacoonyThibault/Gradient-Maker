
export interface Color {
  id: number;
  value: string;
  position: number;
}


export interface GradientState {
  colors: { id: number; value: string; position: number }[];
  pickedColorId: number;
  angle: number;
}
