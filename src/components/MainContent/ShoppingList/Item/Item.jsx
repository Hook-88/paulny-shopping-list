import ItemDisplay from "./ItemDisplay"
import "./Item.css"

export default function Item({children}) {

  return (
    <li className="item--container">
      <ItemDisplay>{children}</ItemDisplay>
    </li>
  )

}