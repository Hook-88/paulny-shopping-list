import ItemDisplay from "./ItemDisplay"
import ItemDisplayRemove from "./ItemDisplayRemove"
import "./Item.css"
import { createContext } from "react"

const ItemContext = createContext()

export default function Item({children, itemObj}) {
  const { checked } = itemObj

  return (
    <ItemContext.Provider value={{itemObj}}>
      <li className="item--container">
        {
          checked ?
          <ItemDisplayRemove>{children}</ItemDisplayRemove> :
          <ItemDisplay>{children}</ItemDisplay>
        } 
      </li>
    </ItemContext.Provider>
  )
}

export { ItemContext }