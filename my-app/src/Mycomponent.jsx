import React,{useState} from 'react'

const Mycomponent = () => {

    const [name, setName] = useState(" ");
    const [age,setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);

    const employedstatus = () =>
    {
      setisEmployed(!isEmployed);
    }

    const updateName = () =>
    {
        setName("harsh");
    }

    const incrementAge = () =>
    {
        setAge(age + 1);
    }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => updateName()}>set name</button>

      <p>age: {age}</p>
      <button onClick={() => incrementAge()}>Increment age</button>

      <p>is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => employedstatus()}>Toggle status</button>
    </div>
  )
}

export default Mycomponent
