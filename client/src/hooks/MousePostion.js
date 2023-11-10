import {useEffect, useState} from "react";

const useMousePostition = () => {

    const [mousePosition, setMousePosition] = useState({X: 0, Y:0});

    const updateMosuePosition = (eve) => {
        const { clientX, clientY} = eve;

        setMousePosition({clientX, clientY});
    };

    useEffect(() =>{

        document.addEventListener('mousemove', updateMosuePosition, false);
        document.addEventListener('mouseenter', updateMosuePosition, false);
        //document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', updateMosuePosition, false);
            document.removeEventListener('mouseenter', updateMosuePosition, false);
        }
    }, []);

    return mousePosition;
};

export default useMousePostition;