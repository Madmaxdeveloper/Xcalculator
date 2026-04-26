import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButton = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      if (input === "") {
        setResult("Error");
      } else {
        const output = eval(input);
        setResult(String(output));
      }
    } catch (e) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{result}</div>
      <br />
      <button onClick={() => handleButton("7")}>7</button>
      <button onClick={() => handleButton("8")}>8</button>
      <button onClick={() => handleButton("9")}>9</button>
      <button onClick={() => handleButton("+")}>+</button>
      <br />
      <button onClick={() => handleButton("4")}>4</button>
      <button onClick={() => handleButton("5")}>5</button>
      <button onClick={() => handleButton("6")}>6</button>
      <button onClick={() => handleButton("-")}>-</button>
      <br />
      <button onClick={() => handleButton("1")}>1</button>
      <button onClick={() => handleButton("2")}>2</button>
      <button onClick={() => handleButton("3")}>3</button>
      <button onClick={() => handleButton("*")}>*</button>
      <br />
      <button onClick={handleClear}>C</button>
      <button onClick={() => handleButton("0")}>0</button>
      <button onClick={handleEqual}>=</button>
      <button onClick={() => handleButton("/")}>/</button>
    </div>
  );
}

export default App;
