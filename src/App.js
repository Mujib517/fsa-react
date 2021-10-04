import React from 'react';
import './App.css';


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
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
