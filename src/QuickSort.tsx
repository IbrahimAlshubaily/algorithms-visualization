import { useEffect, useState } from "react";


export function QuickSort() : JSX.Element {
    const n = 100;
    const [currIdx, setCurrIdx] = useState(0 as number);
    const [numSteps, setNumSteps] = useState(0);
    const [hayStacks, setHayStacks] = useState([] as number[][]);
    
    useEffect(() => {
        const hay : number[] = [];
        for (let i = 0; i < n; i++) {
            hay.push(Math.floor(Math.random() * 300));
        }
        const result : number[][] = [];
        qs(hay, 0, n - 1, result);
        setHayStacks(result);
        setNumSteps(result.length)
        console.log('len',result.length)
    }, [])

    useEffect(() => {
        const interval = setInterval( () => setCurrIdx(currIdx + 1), 100);
        return () => clearInterval(interval);
    }, [currIdx]);

    function qs(arr: number[], lo: number, hi:number, result: number[][]) : number[][] {
        if (lo >= hi ) return result;
        const pivot = partition(arr, lo, hi);
        result.push(arr.slice())
        qs(arr, lo, pivot - 1, result);
        qs(arr, pivot + 1, hi, result);
        return result;
    }

    function partition(arr: number[], lo: number, hi: number) : number {
        let idx = lo;
        for (let i = lo; i < hi; i++){
            if (arr[i] < arr[hi]){
                const tmp = arr[i];
                arr[i] = arr[idx];
                arr[idx] = tmp;
                idx++
            }
        }
        const tmp = arr[hi];
        arr[hi] = arr[idx];
        arr[idx] = tmp;
        return idx;
    }


    const entries: JSX.Element[] = [];
    console.log('currIdx ',currIdx)
    const idx = Math.min(currIdx, numSteps - 1)
    console.log('idx, numsteps ',idx, numSteps)
    
    for (let i = 0; i < n; i++) {
        
        const h = hayStacks.length > 0 ? hayStacks[idx][i] * 2 : 100;
        const entryStyle = {
            height : h,
        }
        const entry = <div className="entry" style={entryStyle} key={i}/>
        entries.push(entry);
    }    
    return <div className="entries" key={n+1}>{entries}</div>

}