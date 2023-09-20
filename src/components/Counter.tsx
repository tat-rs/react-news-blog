import { useState } from "react";
import'./Counter.scss';

export function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>INCREMENT</button>
    </div>
  )
}