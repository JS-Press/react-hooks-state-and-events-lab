import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [items, setItems] = useState(itemData);
  const [isDark, setDark] = useState(false)
  
  const [selectedCategory, setCategory] = useState("All")
  

  const filteredList = items.filter(item => {
    if(selectedCategory === "All"){
      return true 
    } else { 
      return item.category === selectedCategory
     }
  })
 
  function categoryChanger(e){
    setCategory(e.target.value)
  }



  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);



  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

function handleDark(){
  setDark(!isDark)
}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleDark} >Dark Mode</button>
      </header>
      <ShoppingList 
      items={items} 
      categoryChanger = {categoryChanger} 
      selectedCategory = {selectedCategory}
      setCategory = {setCategory}
      filteredList = {filteredList}
      />
    </div>
  );
}

export default App;
