import { useState, useContext } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"
import { FaPenToSquare } from "react-icons/fa6"
import { FaCheck } from "react-icons/fa6"
import Button from "../../../Button/Button"


export default function ItemDisplayNormal({children}) {
  const [onEdit, setOnEdit] = useState(false)
  const { updateItem } = useContext(AppContext)
  const { id } = useContext(ItemContext)

  function checkItem() {
    updateItem(id, "checked", true)
  }

  return (
    !onEdit ?
    <>
      <p onClick={checkItem}>{children}</p>
      <Button className="icon--btn" onClick={() => setOnEdit(true)}><FaPenToSquare /></Button>
    </> : 
    <>
      <input type="text" />
      <Button className="icon--btn edit" ><FaCheck /></Button>
    </>
  )
  
}