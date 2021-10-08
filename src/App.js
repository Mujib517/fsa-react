import React from 'react';
import Name from './Name';
import SpecialCounter from './SpecialCounter';

function App() {
    return <div>
        <h1>Hello React</h1>
        <Name name="John" dept="IT" />
        <Name name="Joseph" dept="HR" />
        <SpecialCounter count={100} />
        <SpecialCounter count={10} />
        <SpecialCounter count={0} />
    </div>
}

export default App;
