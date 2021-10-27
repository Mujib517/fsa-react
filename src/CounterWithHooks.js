import { useEffect, useState } from "react";

function CounterWithHooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            let cnt = count;
            console.log(count, 'count');
            setCount(++cnt);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [count]);

    function onInc() {
        let cnt = count;
        setCount(++cnt);
    }

    return <>
        <h1>Count {count}</h1>
        <button onClick={onInc} className="btn btn-dark">++</button>
    </>
}

export default CounterWithHooks;
