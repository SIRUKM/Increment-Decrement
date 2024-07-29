import "./App.css";
import './index.css';
import { useState } from "react";

function App() {
  const[count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  };

  function decrement(){
    setCount(count - 1)
  }
  function reset(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decrement} className = 'border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'> - </button>
        <div className="font-bold ">{count}</div>
        <button onClick={increment} className = 'border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'> + </button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
