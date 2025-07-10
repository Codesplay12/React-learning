import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count : ${count}  color : ${color}`
    },[count,color])

    const addCount = () =>
    {
        setCount(c => c + 1);
    }

     const subtractCount = () =>
    {
        setCount(c => c - 1);
    }

    const changeColor = () =>
    {
     setColor(c => c === "green" ? "red" : "green")
    }
  return (
    <div>
       <p style={{color : color}}>count: {count}</p>
       <button onClick={addCount}>Add</button>
       <button onClick={subtractCount} >Subtract</button>
       <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default UseEffect
