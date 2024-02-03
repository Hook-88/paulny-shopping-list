import Button from "../../../Button/Button"
import { RiDeleteBin5Fill } from "react-icons/ri"

export default function ItemDisplayRemove({children}) {

  return (
    <div className="item--display remove">
      <p>{children}</p>
      <Button className="item-delete--button">
        <RiDeleteBin5Fill />
      </Button>
    </div>
  )
}