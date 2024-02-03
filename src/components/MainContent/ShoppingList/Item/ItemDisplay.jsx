import Button from "../../../Button/Button"
import { BiEditAlt } from "react-icons/bi"

export default function ItemDisplay({children}) {

  return (
    <div className="item--display">
      <p>{children}</p>
      <Button className="item-edit--button">
        <BiEditAlt />
      </Button>
    </div>
  )
  
}