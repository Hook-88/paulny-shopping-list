import { useState, useContext } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"
import Button from "../../../Button/Button"
import ItemDisplayEdit from "./ItemDisplayEdit"
import { BiEditAlt } from "react-icons/bi"

export default function ItemDisplay({children}) {
  const [editOn, setEditOn] = useState(false)
  const { itemObj } = useContext(ItemContext)
  const { updateItem } = useContext(AppContext)
  const { id, checked } = itemObj

  function showEdit() {
    setEditOn(true)
  }

  function handleClick(event) {
    event.stopPropagation()
    showEdit()
  }

  return (
    !editOn ?
    <div className="item--display" onClick={() => updateItem(id, "checked", !checked)}>
      <p>{children}</p>
      <Button className="item-edit--button" onClick={handleClick}>
        <BiEditAlt />
      </Button>
    </div> : <ItemDisplayEdit />
  )
  
}