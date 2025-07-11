import React, { useState } from 'react'


const ArrayUpdate = () => {

     const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

     const handleAddFood = () =>
     {
       const newFood = document.getElementById("finput").value;
     document.getElementById("finput").value = "";

     setFoods(f => [...f,newFood]);
     }

     const handleDeleteFood = (index) =>
     {
        setFoods(foods.filter((_,i) => i !== index));
     }

     

  return (
    <div>
     <h2>List of Foods</h2>
<ul>
    
    {
        foods.map((food,index) => <li key={index} onClick={() => handleDeleteFood(index)}>{food}</li>)
    }
   
</ul>
 <input type="text" id="finput" placeholder='Enter food name'/> 

 <button onClick={handleAddFood}>Add Food</button>

    </div>
  )
}

export default ArrayUpdate
