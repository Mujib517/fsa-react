import React from 'react';
import Counter from './Counter';
import Name from './Name';

function App() {
    return <div>
        <h1>Hello React</h1>
        <Name name="John" dept="IT" />
        <Name name="Joseph" dept="HR" />
        <Counter />
    </div>
}

export default App;
