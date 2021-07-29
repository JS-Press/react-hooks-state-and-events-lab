import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items, categoryChanger, filteredList }) {

const [inCart, setInCart] = useState(false)


function handleInCart(e){
  console.log(e.target)
//   return items.map((item) => {
//     if (item.id === e.target.value){
// return {
  
// }
//     }else{

//     }
//   })
}


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {categoryChanger} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          inCart = {inCart}
          // setInCart = {setInCart}
          handleInCart = {handleInCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
