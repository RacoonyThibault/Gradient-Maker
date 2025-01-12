// Définition du type pour une couleur individuelle
export interface Color {
  id: number;
  value: string;
  position: number;
}

// Définition de l'interface pour le state de Gradient
export interface GradientState {
  colors: Color[]; // Tableau de couleurs
  pickedColorId: number; // ID de la couleur sélectionnée
  angle: number; // Angle du gradient
}
