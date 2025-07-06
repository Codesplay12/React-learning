import React from 'react'

const List = () => {

    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const ListItems = fruits.map(fruit => <li>{fruit}</li>)
  return (
     <ol>{ListItems}</ol>
  )
}

export default List
