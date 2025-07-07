import { useEffect, useState } from 'react';

function LoadingAnimation({ onComplete }) {

    const [text, setText] = useState("");

    const fullText = "Loading... Please wait!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index >= fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000); // Adjust the delay before calling onComplete
            }
        }, 100); // Adjust the speed of typing effect here

        return () => clearInterval(interval);
    }, [onComplete]);
    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5">
            <div className="w-[325px] h-[4px] bg-gray-800 relative overflow-hidden">
                <div className="w-[50%] h-full bg-blue-500 shadow-[0_0_10px_#4179e3] animate-loading-bar"></div>
            </div>

            <div className="mb-4 text-2xl font-mono font-semibold">
                {text}
                <span className="animate-blink ml-1 text-2xl font-bold"> | </span> 
            </div>

            <div className="w-[325px] h-[4px] bg-gray-800 relative overflow-hidden">
                <div className="w-[50%] h-full bg-blue-500 shadow-[0_0_10px_#4179e3] animate-loading-bar"></div>
            </div>
        </div>
    )
}

export default LoadingAnimation