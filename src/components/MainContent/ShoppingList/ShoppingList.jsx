import { useContext } from "react"
import Item from "./Item/Item"
import { AppContext } from "../../../App"
import "./ShoppingList.css"

export default function ShoppingList() {
  const { shoppingItems } = useContext(AppContext)
  
  const shoppingListIemsEl = 
    shoppingItems ?
      shoppingItems.map(item => <Item key={item.id}>{item.name}</Item>) :
      null
  
  return (
    <ul className="shopping-list--container">
      {shoppingListIemsEl}
    </ul>
  )
}