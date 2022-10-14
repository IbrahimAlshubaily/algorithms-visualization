import { useEffect } from "react";
import { useState } from "react";

export function TwoCrystalBalls() : JSX.Element {
    const n = 100;
    const [currIdx, setCurrIdx] = useState(0);
    const [numBalls, setNumBalls] = useState(2);
    const [clifIdx, setClifIdx] = useState(Math.floor(Math.random() * n));


    useEffect(() => {
        const interval = setInterval(() => {
            step();
        }, 1000);
        return () => clearInterval(interval);
    }, [currIdx]);

    function step() {
        if (numBalls < 2){
            if (currIdx < clifIdx - 1)
                setCurrIdx(currIdx + 1);
            return
        }
        if (currIdx > clifIdx){
            setCurrIdx(currIdx - Math.floor(Math.sqrt(n)));
            setNumBalls(1);
        } else {
            setCurrIdx(currIdx + Math.floor(Math.sqrt(n)));
        }
    }
    
    const entries: JSX.Element [] = [];
    for (let i = 0; i < n; i++) {
        let color = i < clifIdx ? "green" : "red";
        if (i === currIdx) {
            color = "black"
        }
        const entryStyle = {
            backgroundColor : color,
        }
        const entry = <div className="entry" style={entryStyle}/>
        entries.push(entry);
    }
    return <div className="entries">{entries}</div>
}