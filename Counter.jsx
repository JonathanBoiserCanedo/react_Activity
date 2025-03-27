import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(5);

  return (
    <div className="counter-container">
      <div className="display">{count}</div>

      <div class="coontainer">
      <div className="message">The current value is {count}.</div>
      <div className="controls">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
</div>


    </div>
  );
}

export default Counter;