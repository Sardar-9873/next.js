"use client";
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    console.log('Where am I running, client');

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{setCount(count + 1);}}>Increment</button>
    </div>
  );
}

export default Counter;