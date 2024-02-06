import "./Item.css"
import { createContext } from "react"

const ItemContext = createContext()

export default function Item({children, itemObj}) {
  const { checked } = itemObj

  return (
    <ItemContext.Provider value={{itemObj}}>
      <li className="item--container">
        {children}
      </li>
    </ItemContext.Provider>
  )
}

export { ItemContext }