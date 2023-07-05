// General
import React, {useState, useEffect} from "react";

const LoginPage: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [large, setLarge] = useState(false);
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        const timerVisible = setTimeout(() => {
            setVisible(true);
            const timerScale = setTimeout(() => {
                setLarge(true);
                setTimeout(() => {
                    setShowBox(true);
                }, 3000); // show the box 0.5s after the image enlarges
            }, 1000); // start scaling 1s after the image becomes visible

            return () => clearTimeout(timerScale);
        }, 1000); // start fading in 1s after the component mounts

        return () => clearTimeout(timerVisible);
    }, []);

    return (
        <div
            className="flex justify-center items-center h-screen"
        >
            <img
                src="ink_black.svg"
                alt="Ink Black"
                className="w-1/2 h-1/2 absolute"
                style={{
                    transform: large
                        ? 'scale(5) translateX(-2%)'
                        : 'scale(0.1) translateX(0)',
                    transition: 'transform 2.5s ease-in-out, opacity 0.25s ease-in-out',
                    opacity: visible ? 1 : 0,
                    zIndex: 1
                }}
            />
            {showBox && (
                <div className="w-80 h-96 border-2 border-white absolute z-10"></div>
            )}
        </div>
    );
}

export default LoginPage;
