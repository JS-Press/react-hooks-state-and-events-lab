import React,  { useState } from "react";



function Item({ name, category}) {

const [inCart, setInCart] = useState(false)


function handleInCart(){
  // console.log(e.target)
  setInCart(true)
//   return items.map((item) => {
//     if (item.id === e.target.value){
// return {
  
// }
//     }else{

//     }
//   })
}


  
  return (
    <li className={inCart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleInCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;










// function cartItem(e){
  
//   const itemList = itemData.map((item) => {
//     if (item.id === e.target.id) {
//       item.className = 'in-cart'
//     } else { return item }
//   })
//     setItems(itemList)
//   }