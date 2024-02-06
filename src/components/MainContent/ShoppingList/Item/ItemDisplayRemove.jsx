import Button from "../../../Button/Button"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { useContext } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"

export default function ItemDisplayRemove({children}) {
  const { deleteItem, updateItem } = useContext(AppContext)
  const { itemObj } = useContext(ItemContext)
  const { id, checked } = itemObj

  function remove(event) {
    event.stopPropagation()
    deleteItem(id)

  }

  return (
    <div className="item--display remove" onClick={() => updateItem(id, "checked", !checked)}>
      <p>{children}</p>
      <Button className="item-delete--button" onClick={remove}>
        <RiDeleteBin5Fill />
      </Button>
    </div>
  )
}