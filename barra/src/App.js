import React, {useState} from 'react';
import Barra from './components/Barra';
import './App.css';

function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));
  return (
    <div className="App">
   <Barra/>
  
        <h1>Progress bar</h1>
        <Barra width={val} />
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
  );
}

export default App;
