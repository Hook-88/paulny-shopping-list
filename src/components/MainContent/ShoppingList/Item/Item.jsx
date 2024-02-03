import ItemDisplay from "./ItemDisplay"
import ItemDisplayRemove from "./ItemDisplayRemove"
import "./Item.css"

export default function Item({children, itemObj}) {
  const { checked } = itemObj

  return (
    <li className="item--container">
      {
        checked ?
          <ItemDisplayRemove>{children}</ItemDisplayRemove> :
          <ItemDisplay>{children}</ItemDisplay>
      } 
    </li>
  )

}