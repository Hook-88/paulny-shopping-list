import ItemDisplay from "./ItemDisplay"
import ItemDisplayRemove from "./ItemDisplayRemove"
import "./Item.css"
import { useContext, createContext } from "react"
import { AppContext } from "../../../../App"

const ItemContext = createContext()

export default function Item({children, itemObj}) {
  const { checked, id } = itemObj

  const displayItemEl = 
    checked ? 
      <ItemDisplayRemove itemID={id}>{children}</ItemDisplayRemove> :
      <ItemDisplay>{children}</ItemDisplay>


  return (
    <ItemContext.Provider value={{itemObj}}>
      {/* <li className="item--container" onClick={() => updateItem(id, "checked", !checked)}> */}
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