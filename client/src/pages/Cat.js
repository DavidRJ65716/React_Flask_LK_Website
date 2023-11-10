import React from 'react';
import useMousePostition from '../hooks/MousePostion.js';

export default function Cat() {
    
    const {X, Y} = useMousePostition();

    return(
        <p>
            Your cursor position:
        <br />
            {JSON.stringify(useMousePostition())}
        </p>
    );
    
}