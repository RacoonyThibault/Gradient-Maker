import { useDispatch } from "react-redux";
import { uptdateColorValue } from "../../store/features/gradientSlice";

interface ColorInputProps {
  id: number;
  color: string;
}

export default function ColorInput({ id, color }: ColorInputProps) {
  const dispatch = useDispatch();
  return (
    <input
      id={`color-input-${id}`}
      className="w-[60px] h-[60px] bg-transparent rounded-md cursor-pointer block [&:not(:last-child)] : mr-4"
      type="color"
      value={color || "#000000"}
      onChange={(e) =>
        dispatch(
          uptdateColorValue({ id, value: e.target.value, type: "color" })
        )
      }
    />
  );
}
