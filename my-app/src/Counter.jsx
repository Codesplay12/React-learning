import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () =>
    { 
       
          setCount(c => c+1);
           setCount(c => c+1);
            setCount(c => c+1);
       }

     const DecrementCount = () =>
    {
       
        setCount( c => c -1)
        setCount( c => c -1)
        setCount( c => c -1)
    
    }

     const reset = () =>
    {
        setCount(0);
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => incrementCount()}>Increment</button>
        <button onClick={() => DecrementCount()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default Counter
