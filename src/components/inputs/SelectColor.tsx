import { useSelector, useDispatch } from "react-redux"
import { pickColor } from "../../store/features/gradientSlice"
import { RootState } from "@/store"

export default function SelectColor () {
    const dispatch = useDispatch()
    const gradientValues = useSelector((state: RootState) => state.gradient)
    return (
        <div className="mb-5">
            <select 
            onChange={e=> dispatch(pickColor(Number(e.target.value)))}
            className="bg-gray-900 cursor-pointer py-1 px-2 mb-1 mt-2 border-gray-700 outline-none focus:border-gray-500"
            >{gradientValues.colors.map((color)=>(
                <option 
                key={color.id}
                value={color.id}
                >Color {color.id}</option>
            )
            )}</select>
        </div>
    )
}