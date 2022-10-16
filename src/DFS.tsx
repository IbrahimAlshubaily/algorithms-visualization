export function DFS(): JSX.Element {
    const n = 7;

    const directions: point[] = [
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x: -1, y: 0},
        {x: 0, y: -1},
    ];

    function dfs(start : point, end : point, path : point[]) : boolean {
        console.log(start.x, start.y)
        if (start.x < 0 || start.x >= n || start.y < 0 || start.y >= n) {
            return false;
        }

        if (path.includes(start)) {
            return false;
        }


        path.push(start);
        if (start.x === end.x && start.y === end.y){
            return true;
        }

        for (let i = 0; i < directions.length; i++) {
            const nextStart = {
                x : start.x + directions[i].x,
                y : start.y + directions[i].y
            }
            if (dfs(nextStart, end, path)) {
                return true;
            }
        }
        path.pop();
        return false;
    }

    const start: point = {x: 0, y:0};
    const end: point = {x: n - 1, y:n - 1};
    const path : point[] = [];
    dfs(start, end, path);
    console.log(path)
    //walls?
    const grid : JSX.Element[] = [];
    for (let i = 0; i < n; i++) {
        const row : JSX.Element[] = [];
        for (let j = 0; j < n; j++) {
            const currPoint = {x: i, y :j};
            let color = ""
            path.forEach((p) => {
                if (p.x === currPoint.x && p.y === currPoint.y){
                    color = "green";
                }
            })

            const cellStyle = {
                backgroundColor : color,
            }
            row.push(<div className="gridCell" style={cellStyle}>{i + " - " + j}</div>)
        }
        grid.push(<div className="gridRow">{row}</div>)
    }
    return <div className="grid">{grid}</div>
}

interface point {
    x : number,
    y: number,
}