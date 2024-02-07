import { useState, useContext, useRef } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"
import { FaPenToSquare } from "react-icons/fa6"
import Button from "../../../Button/Button"
import ItemEditForm from "./ItemEditForm"


export default function ItemDisplayNormal({children}) {
  const { id } = useContext(ItemContext)
  const [onEdit, setOnEdit] = useState(false)
  const { updateItem } = useContext(AppContext)
  const inputRef = useRef()

  function checkItem() {
    updateItem(id, "checked", true)
  }

  function showEditItem() {
    setOnEdit(true)
  }

  function hideEditItem() {
    setOnEdit(false)
  }

  return (
    !onEdit ?
    <>
      <p onClick={checkItem}>{children}</p>
      <Button className="icon--btn" onClick={showEditItem}><FaPenToSquare /></Button>
    </> : 
    <ItemEditForm hide={hideEditItem}/>
  )
  
}