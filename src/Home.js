
import { createContext, useContext } from 'react';
const DataContext = createContext({});

function Parent() {
    return <>
        <h1>Parent</h1>
        <L1 x={100} />
    </>
}

function L1() {
    return <>
        <h1>Level 1</h1>
        <L2 />
    </>
}

function L2() {
    return <>
        <h1>Level2</h1>
        <L3 />
    </>
}

function L3() {
    const { x } = useContext(DataContext);
    return <>
        <h1>Level3</h1>
        <h2>Value from parent {x}</h2>
    </>
}



function Home() {
    return <>
        <DataContext.Provider value={{ x: 1000 }}>
            <Parent />
        </DataContext.Provider>
        <h1>Home Page</h1>
    </>
}

export default Home;
