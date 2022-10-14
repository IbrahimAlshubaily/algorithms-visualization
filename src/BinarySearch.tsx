import { useEffect } from "react";
import { useState } from "react";

export function BinarySearch() : JSX.Element {

    const n : number = 1024;
    const [stepCount, setStepCount] = useState(0);
    const [hi, setHi] = useState(n);
    const [lo, setLo] = useState(0);
    const [needleIdx, setNeedleIdx] = useState(Math.floor(Math.random() * n));

    useEffect(() => {
        const interval = setInterval(() => {
            step();
            setStepCount(stepCount+1);
        }, 1000);
        return () => clearInterval(interval);
    }, [lo, hi]);
      
      
    const hayStack : number[] = [];
    for (let i = 0; i < n; i++) {
        hayStack.push(i);
    }

    const needle = hayStack[needleIdx];

    function step() {
        
        if (hi <= lo) return 
        
        const currIdx = lo + Math.floor((hi - lo) / 2);
        if (hayStack[currIdx] === needle) {
            console.log("bingo", stepCount)
            return;
        }
        if (hayStack[currIdx] < needle) {
            setLo(currIdx + 1);
        } else {
            setHi(currIdx);
        }
    }


    const entries : JSX.Element[] = [];
    const currIdx = lo + Math.floor((hi - lo) / 2);
    for (let i = 0; i < hayStack.length; i++) {
        
        let color = "gray";
        if (needle === hayStack[i]) {
            color = 'green';
        }
        if (i === currIdx) {
            color = 'red';
        }

        const entryStyle = {
            height : hayStack[i],
            backgroundColor : color
        }
        entries.push(<div className="entry" style={entryStyle}/>);
    }
    return <div className="entries">{entries}</div>;
}