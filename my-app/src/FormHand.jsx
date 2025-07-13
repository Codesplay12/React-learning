import React, { useState } from 'react'

const FormHand = () => {
   
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");


    const handleName = (e) =>
    {
      setName(e.target.value);
    }

     const handleEmail = (e) =>
    {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) =>
    {
        
         e.preventDefault();
         console.log(name);
         console.log(email);
         alert(`Form submitted `);
         
         
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={handleName} />
         <input type="email" placeholder='Enter your Email' value={email}  onChange={handleEmail}/>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormHand;
