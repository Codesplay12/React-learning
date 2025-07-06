import React from 'react'

const Button = () => {

   // const handleCLick = (name) => console.log("hello");

   let count = 0;

   const handleClick2 = (name) => {
    if(count < 3)
    {
        count++;
        console.log(`${name} you clicked me ${count} times`);
        
    }
    else{
        console.log(`${name} stop clicking me`);
        
    }
   }

   const handleC = (e) => {
       e.target.textContent = "Hide";
       console.log("hello");
       
   }
    
  return (
    <div>
       <button onClick={(e)=> handleC(e)}>click Me</button>
    </div>
  )
}

export default Button
