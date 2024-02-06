import Button from "../../../Button/Button"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { useContext } from "react"
import { AppContext } from "../../../../App"

export default function ItemDisplayRemove({children, itemID}) {
  const { deleteItem } = useContext(AppContext)

  function remove(event) {
    event.stopPropagation()
    deleteItem(itemID)

  }

  return (
    <div className="item--display remove">
      <p>{children}</p>
      <Button className="item-delete--button" onClick={remove}>
        <RiDeleteBin5Fill />
      </Button>
    </div>
  )
}