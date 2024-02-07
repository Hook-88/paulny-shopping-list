import { createContext } from "react"
import classNames from "classnames"
import ItemDisplayNormal from "./ItemDisplayNormal"
import ItemDisplayRemove from "./ItemDisplayRemove"
import "./Item.css"

const ItemContext = createContext()

export default function Item({children, itemObj}) {
  const { checked } = itemObj
  const liClassNames = classNames(
    "item--container",
    {"remove" : checked}
  )

  return (
    <ItemContext.Provider value={{...itemObj}}>
      <li className={liClassNames}>
        {
          checked ?
            <ItemDisplayRemove>{children}</ItemDisplayRemove> :
            <ItemDisplayNormal>{children}</ItemDisplayNormal>
        } 
      </li>
    </ItemContext.Provider>
  )
}

export { ItemContext }