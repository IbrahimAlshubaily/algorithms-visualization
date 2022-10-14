import { useEffect } from "react";
import { useState } from "react";

export function BubbleSort() : JSX.Element {
    const n = 100;
    const [currIdx, setCurrIdx] = useState(0);
    const [numBalls, setNumBalls] = useState(2);
    const [clifIdx, setClifIdx] = useState(Math.floor(Math.random() * n));


    useEffect(() => {
        const interval = setInterval(() => {
            step();
        }, 100);
        return () => clearInterval(interval);
    }, [currIdx]);

    function step() {
        if (numBalls < 2){
            setCurrIdx(currIdx + 1);
        }
        if (currIdx > clifIdx){
            setCurrIdx(currIdx - Math.floor(Math.sqrt(n)));
            setNumBalls(1);
        }
    }
    
    const entries: JSX.Element [] = [];
    for (let i = 0; i < n; i++) {
        const entryStyle = {
            height : hayStack[i] * 2
        }
        const entry = <div className="entry" style={entryStyle}/>
        entries.push(entry);
    }
    return <div className="entries">{entries}</div>
}