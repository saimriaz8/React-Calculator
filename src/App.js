import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const calculate = (event) => {
    setResult(result.concat(event.target.value))
  }
  const clear=()=>{
    setResult("");
  }

  const evaluate=()=>{

    setResult(eval(result).toString());

  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" id="answer" value={result} placeholder="0" />
        </div>
        <div className="operators">
          <button value="/" onClick={calculate}>/</button>
          <button value="*" onClick={calculate}>*</button>
          <button value="-" onClick={calculate}>-</button>
          <button value="+" onClick={calculate}>+</button>

          <button value="Clear" onClick={clear}>Clear</button>
        </div>

        <div className="digits">


          <button value="9" onClick={calculate}>9</button>
          <button value="8" onClick={calculate}>8</button>
          <button value="7" onClick={calculate}>7</button>
          <button value="6" onClick={calculate}>6</button>
          <button value="5" onClick={calculate}>5</button>
          <button value="4" onClick={calculate}>4</button>
          <button value="3" onClick={calculate}>3</button>
          <button value="2" onClick={calculate}>2</button>
          <button value="1" onClick={calculate}>1</button>
          <button value="0" onClick={calculate}>0</button>
          <button value="." onClick={calculate}>.</button>
          <button value="=" onClick={evaluate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
