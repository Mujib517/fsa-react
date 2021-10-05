import React from 'react';
import './App.css';
import MathObj, { PI } from './Math';

class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return <div>
      <h1>Count: {this.state.count}</h1>
      <button>++</button>
    </div>
  }
}

// function Counter() {
//   const count = 0;

//   return <div>
//     <h1>Count: {count}</h1>
//     <button>++</button>
//   </div>
// }

function App() {
  var m1 = new MathObj();
  const res = m1.add(10, 20);
  return (
    <div className="App">
      <h1>Hello React!! {res} {PI}</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
