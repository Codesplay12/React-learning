import React, { useState } from 'react'

const ArrayObjectUpdate = () => {

    const [cars, setCars] = useState([]);

        const [carYears, setCarsYears] = useState(new Date().getFullYear());

            const [carMake, setCarsMake] = useState("");

                const [carModel, setCarsModel] = useState("");


         const handleAddCar = () =>
            {
             const newCar = {year : carYears,
                              make: carMake,
                             model: carModel};

             setCars(c => [...c,newCar]);

             setCarsYears(new Date().getFullYear());
                 setCarsMake('');
              setCarsModel('');
            }   

            
         const handleRemoveCar = (index) =>
            {
                setCars(c => c.filter((_, i) => i !== index));
            } 
            
            
          const handleCarYear = (e) =>
            {
                setCarsYears(e.target.value);
            }  
            
            
           const handleCarMake = (e) =>
            {
                setCarsMake(e.target.value);
            }           

            const handleCarModel = (e) =>
            {
                setCarsModel(e.target.value);
            }     

  return (
    <div>
        <h2>List of car Objects</h2>
        <ul>
           {cars.map((car,index) => 
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        )}
        </ul>
      <input type="number" value={carYears} onChange={handleCarYear}/><br />
          <input type='text' value={carMake} onChange={handleCarMake} placeholder='Enter car make'/><br />
              <input type='text' value={carModel} onChange={handleCarModel} placeholder='Enter car model'/> <br />

              <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ArrayObjectUpdate
