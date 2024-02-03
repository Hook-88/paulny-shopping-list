import { useContext } from "react"
import Item from "./Item/Item"
import { AppContext } from "../../../App"
import getCapString from "../../../utility/getCapString"
import "./ShoppingList.css"

export default function ShoppingList() {
  const { shoppingItems } = useContext(AppContext)
  const sortedShoppingListItems = shoppingItems ? [...shoppingItems] : []
  sortedShoppingListItems.sort((a, b) => a.name.localeCompare(b.name))
  
  const shoppingListIemsEl =
    // if there are items on shopping list 
    sortedShoppingListItems ?
      sortedShoppingListItems.map(
        item => <Item key={item.id}>{getCapString(item.name)}</Item>
      ) : null
  
  return (
    <ul className="shopping-list--container">
      {shoppingListIemsEl}
    </ul>
  )
}