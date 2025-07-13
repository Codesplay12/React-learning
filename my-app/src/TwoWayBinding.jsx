import React, { useState } from 'react'

const TwoWayBinding = () => {

    const [name, setName] = useState("");

    const handleNameChange = (e) =>
    {
       setName(e.target.value);
       console.clear();
       console.log(name);
       
    }
  return (
    <div>
        <input type="text" value={name} placeholder='Enter your name' onChange={(e) =>handleNameChange(e)}/>
      
    </div>
  )
}

export default TwoWayBinding;
