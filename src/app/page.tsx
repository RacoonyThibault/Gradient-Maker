"use client";
import { useSelector } from "react-redux";
import Gradient from "../components/Gradient";
import ColorInput from "../components/inputs/ColorInput";
import { rootState } from "../store";

export default function Home() {
  const gradientValues = useSelector((state: rootState) => state.gradient);
  return (
    <div className="relative max-w-xl mx-auto mt-20 p-4 border border-slate-400 flex">
      <div className="w-1/2 p-4 pr-8">
        <h1 className="text-center text-xl">Gradient Generator</h1>
        <p className="text-center mb-6">
          ✨Ajoutez du style à votre application.✨
        </p>
        <p className="mb-1">Colors, min 2, max 5.</p>
        <div className="flex mb-2 gap-2">
          {gradientValues.colors.map((obj) => (
            <ColorInput id={obj.id} color={obj.value} key={obj.id} />
          ))}
        </div>
        <div className="flex mb-2 gap-1 ">
          <button className="w-12 border border-slate-400 rounded-md">-</button>
          <button className="w-12 border border-slate-400 rounded-md">+</button>
        </div>
        <p>Choisir et modifier la position d&rsquo;une couleur</p>
        {/* {SelectColor} */}
        <p>Position de la couleur</p>
        {/* {RangeColor}*/}
        <p>Angle global du gradient</p>
        {/* {RangeAngle} */}

        {/* {OpenModalBtn} */}
      </div>
      <Gradient />
    </div>
  );
}
