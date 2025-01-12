import { useDispatch, useSelector } from "react-redux"
import {updateAngle} from "../../store/features/gradientSlice"
import { rootState } from "@/store"

export default function RangeAngle () {
    const dispatch = useDispatch()
    const gradientValues = useSelector((state: rootState) => state.gradient)
    return (
        <input 
        min={0}
        max={360}
        value={gradientValues.angle}
        onChange={e => dispatch(updateAngle(e.target.value))}
        type="range"
        className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer "
        />
    )
}