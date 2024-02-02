import { useState } from "react"
import Item from "./Item/Item"
import "./ShoppingList.css"

export default function ShoppingList() {
  const slDummyData = ["cervesa", "arroz", "pan"]
  const [shoppingItems, setShoppingItems] = useState(slDummyData)
  const shoppingListIemsEl = 
    shoppingItems.map(item => <Item key={item}>{item}</Item>)
  
  return (
    <ul className="shopping-list--container">
      {shoppingListIemsEl}
    </ul>
  )
}