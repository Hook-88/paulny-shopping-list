import { createContext } from "react"
import { FaPenToSquare } from "react-icons/fa6"
import Button from "../../../Button/Button"
import ItemDisplayNormal from "./ItemDisplayNormal"
import "./Item.css"

const ItemContext = createContext()

export default function Item({children, itemObj}) {
  const { checked } = itemObj

  return (
    <ItemContext.Provider value={{itemObj}}>
      <li className="item--container">
        <ItemDisplayNormal>{children}</ItemDisplayNormal>
      </li>
    </ItemContext.Provider>
  )
}

export { ItemContext }