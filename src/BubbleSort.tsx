import { useEffect } from "react";
import { useState } from "react";

export function BubbleSort() : JSX.Element {
    const n = 100;
    const [hi, setHi] = useState(n + 1);
    const [hayStack, setHayStack] = useState([] as number[])

    useEffect(() => {
        const hay = [];
        for (let i = 0; i < n; i++) {
            hay.push(Math.floor(Math.random() * 300));
        }
        setHayStack(hay);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            step();
        }, 100);
        return () => clearInterval(interval);
    }, [hi]);

    function step() {
        for (let i = 0; i < hi - 1; i++) {
            if (hayStack[i] > hayStack[i + 1]){
                const tmp = hayStack[i];
                hayStack[i] = hayStack[i + 1];
                hayStack[i + 1] = tmp;
            }
        }
        setHi(hi - 1);
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