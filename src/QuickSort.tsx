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
                swap(arr, i, idx);
                idx++
            }
        }
        swap(arr, hi, idx);
        return idx;
    }

    function swap(arr: number[], i: number, j: number) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    
    const entries: JSX.Element[] = [];
    const idx = Math.min(currIdx, numSteps - 1)    
    for (let i = 0; i < n; i++) {
        
        const entryStyle = {
            height : hayStacks.length > 0 ? hayStacks[idx][i] * 2 : 100,
        }
        const entry = <div className="entry" style={entryStyle} key={i}/>
        entries.push(entry);
    }    
    return <div className="entries" key={n+1}>{entries}</div>

}