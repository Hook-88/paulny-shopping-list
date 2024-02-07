import { useState, useContext, useRef, useEffect } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"
import { FaPenToSquare } from "react-icons/fa6"
import { FaCheck } from "react-icons/fa6"
import getCapString from "../../../../utility/getCapString"
import Button from "../../../Button/Button"
import ItemEditForm from "./ItemEditForm"


export default function ItemDisplayNormal({children}) {
  const { id, name } = useContext(ItemContext)
  const [onEdit, setOnEdit] = useState(false)
  const [itemInput, setItemInput] = useState(name)
  const { updateItem } = useContext(AppContext)
  const inputRef = useRef()

  function checkItem() {
    updateItem(id, "checked", true)
  }

  function handleInputChange() {
    setItemInput(inputRef.current.value)
  }

  function saveChange() {
    updateItem(id, "name", itemInput)
    setOnEdit(false)
  }

  function showEditItem() {
    setOnEdit(true)
  }

  return (
    !onEdit ?
    <>
      <p onClick={checkItem}>{children}</p>
      <Button className="icon--btn" onClick={showEditItem}><FaPenToSquare /></Button>
    </> : 
    <form
      style={
        {
          display: "flex",
          width: "100%"
        }
      }
    >
      <input type="text" ref={inputRef} onChange={handleInputChange} value={getCapString(itemInput)}/>
      <Button className="icon--btn edit" onClick={saveChange}><FaCheck /></Button>
    </form>
  )
  
}