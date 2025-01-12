import { useSelector } from "react-redux"
import { RootState } from "@/store";
import GetGradientCSSValue from "@/app/utils/getGradientCSSValue"

interface CodeModalProps {
    closeModal: () => void;
  }

export default function CodeModal ({ closeModal }: CodeModalProps) {
    const gradientValues = useSelector((state: RootState) => state.gradient);
    let runningAnimation = false
    function handelCopy(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        if (!runningAnimation) {
            runningAnimation = true;

            const button = e.currentTarget as HTMLButtonElement;
            button.textContent = "copied !";
    
            navigator.clipboard.writeText(
                `background-image : ${GetGradientCSSValue(gradientValues)}`
            );
    
            setTimeout(() => {
                button.textContent = "copy";
                runningAnimation = false;
            }, 500);
        }
    }
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center">
            <div className="max-w-[500px] rounded p-7 bg-gray-50">
                <div className="flex items-center mb-5">
                    <p className="font-semibold text-gray-950 mr-6">here is your code 🎊🎊🎊</p>
                    <button
                    onClick={handelCopy}
                    className=" ml-auto mr-2 text-sm bg-blue-600 hover:bg-blue-700 py-1 px-3 rounded">
                        copy
                    </button>
                    <button
                    onClick={closeModal}
                    className=" text-sm bg-red-600 hover:bg-red-700 py-1 px-3 rounded">
                        Close
                    </button>
                    </div>
                    <p className="rounded bg-gray-900 p-5 text-gray-200 font-semi-bold">
                        {`background-image : ${GetGradientCSSValue(gradientValues)}`}
                    </p>
                </div>
            </div>
    )
}