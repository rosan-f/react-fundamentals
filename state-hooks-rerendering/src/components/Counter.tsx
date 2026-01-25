import { useCounter } from "../hooks/useCounter";

const Counter = () => {

const {count, handleDecrement, handleIncrement, handleReset} = useCounter()

  return(
    <div style={{ display:"flex", gap:"20px" }}>
      <button onClick={handleIncrement}>-</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>+</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
