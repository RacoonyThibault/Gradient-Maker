import { useDispatch } from "react-redux"
import { addColor, removeColor} from "../store/features/gradientSlice"

interface AddRemoveColorProps {
    action: "add" | "remove";
    text: string;
  }

export default function AddRemoveColor ({ action, text }: AddRemoveColorProps){
    const dispatch = useDispatch()

    function handleClick(){
        if(action === "add"){
            dispatch(addColor())
        }
        else if (action === "remove"){
            dispatch(removeColor())
        }
    }
    return (
        <button onClick={handleClick} className="mr-1 border border-slate-400 rounded min-w-[40px]">
            {text}
        </button>
    )
}