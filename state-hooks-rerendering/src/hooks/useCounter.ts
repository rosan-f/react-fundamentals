import { useState } from "react";

// custom hook
export const useCounter = () => {

  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount(count + 1)
  }

  const handleIncrement = () => {

    if(count > 0) {
      setCount(count - 1)
    }else{
      alert("count sudah 0")
      return 0
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleReset
  }

}
