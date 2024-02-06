import ItemDisplay from "./ItemDisplay"
import ItemDisplayRemove from "./ItemDisplayRemove"
import "./Item.css"
import { useContext } from "react"
import { AppContext } from "../../../../App"

export default function Item({children, itemObj}) {
  const { checked, id } = itemObj
  const { updateItem } = useContext(AppContext)

  return (
    <li className="item--container" onClick={() => updateItem(id, "checked")}>
      {
        checked ?
          <ItemDisplayRemove itemID={id}>{children}</ItemDisplayRemove> :
          <ItemDisplay>{children}</ItemDisplay>
      } 
    </li>
  )

}