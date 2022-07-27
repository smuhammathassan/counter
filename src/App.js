import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button className="buttonDecrement" onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <button className="buttonIncrement" onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
