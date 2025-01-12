import { useDispatch, useSelector } from "react-redux"
import {updateAngle} from "../../store/features/gradientSlice"
import { RootState } from "@/store"

export default function RangeAngle () {
    const dispatch = useDispatch()
    const gradientValues = useSelector((state: RootState) => state.gradient)
    return (
        <input 
        min={0}
        max={360}
        value={gradientValues.angle}
        onChange={e => dispatch(updateAngle(Number(e.target.value)))}
        type="range"
        className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer "
        />
    )
}