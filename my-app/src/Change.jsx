import React, { useState } from 'react'

const Change = () => {

    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState();

        const [comment, setComment] = useState(" ");

        const [payment, setPayment] = useState();

        const [shipping, setShipping] = useState();

    
    

    const updateName = (e) =>
    {
      setName(e.target.value);
    }

     const updateQuantity = (e) =>
    {
      setQuantity(e.target.value);
    }

     const updateComment = (e) =>
    {
      setComment(e.target.value);
    }

     const updatePayment = (e) =>
    {
      setPayment(e.target.value);
    }

    const updateShipping =  (e) =>
    {
        setShipping(e.target.value);
    }

  return (
    <div>
   
      <input  value={name} onChange={updateName}/>
         <p>Name : {name}</p>

          <input  value={quantity} onChange={updateQuantity} type='number'/>
         <p>quantity : {quantity}</p>

         <textarea value = {comment}  onChange={updateComment}  placeholder="Enter delivery instruction"></textarea>
         <p>Comment : {comment}</p>

         <select value={payment} onChange={updatePayment}  >

            <option value="">Select Payment Method</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="UPI">UPI</option>

         </select>
         <p>Payment : {payment}</p>

         <label >
            <input type="radio" value="Pick Up" onChange={updateShipping} 
            checked = {shipping === "Pick Up"}
              />
              Pick Up
         </label> <br />

         <label >
            <input type="radio" value="Delivery" onChange={updateShipping} 
            checked={shipping === "Delivery"}
              />
              Delivery
         </label>
         <p>Shipping : {shipping}</p>
         
        
    </div>
  )
}

export default Change
