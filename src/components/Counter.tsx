import { useState } from "react";
import cls from './Counter.module.scss';

export function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment} className={cls.btn}>INCREMENT</button>
    </div>
  )
}