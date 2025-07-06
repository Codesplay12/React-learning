import React,{useState} from 'react'

const Objects = () => {

      const [car, setCar] = useState({year: 2025,
                                       make:"Ford", model:"Mustang"});
  
     const handleChangeYear = (e)   =>
        {
          setCar(c =>({...c, year: e.target.value}))
        }  
        
     const handleChangeMake = (e)   =>
        {
            setCar(c =>({...c, make: e.target.value}))
        }  

     const handleChangeModel = (e)   =>
        {
            setCar(c =>({...c, model: e.target.value}))
        }  

  return (
    <div>
    <p>Your Favourite car is : {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year}  onChange={handleChangeYear}/> <br />
      <input type="text" value={car.make} onChange={handleChangeMake}/> <br />
        <input type="text" value={car.model} onChange={handleChangeModel}/> <br />
    </div>
  )
}

export default Objects
