import { useDispatch, useSelector } from "react-redux"
import {updateColorPosition} from "../../store/features/gradientSlice"
import { RootState } from "@/store"

export default function RangeColorPosition () {
    const dispatch = useDispatch()
    const gradientValues = useSelector((state: RootState) => state.gradient)
    const selectedColorPosition = gradientValues.colors.find(obj=> obj.id === gradientValues.pickedColorId)
    return (
        <input 
        value={selectedColorPosition ? selectedColorPosition.position : 0}
        onChange={e => dispatch(updateColorPosition(Number(e.target.value)))}
        type="range"
        className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer "
        />
    )
}