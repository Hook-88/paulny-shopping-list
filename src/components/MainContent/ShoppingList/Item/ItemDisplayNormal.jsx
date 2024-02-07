import { useState, useContext, useRef } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"
import { FaPenToSquare } from "react-icons/fa6"
import { FaCheck } from "react-icons/fa6"
import getCapString from "../../../../utility/getCapString"
import Button from "../../../Button/Button"


export default function ItemDisplayNormal({children}) {
  const { id, name } = useContext(ItemContext)
  const [onEdit, setOnEdit] = useState(false)
  const [itemInput, setItemInput] = useState(name)
  const { updateItem } = useContext(AppContext)
  const inputRef = useRef(null)

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

  function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
      saveChange()
    }
  }



  return (
    !onEdit ?
    <>
      <p onClick={checkItem}>{children}</p>
      <Button className="icon--btn" onClick={() => setOnEdit(true)}><FaPenToSquare /></Button>
    </> : 
    <>
      <input type="text" ref={inputRef} onChange={handleInputChange} value={getCapString(itemInput)} onKeyUp={handleEnterKeyPress}/>
      <Button className="icon--btn edit" onClick={saveChange}><FaCheck /></Button>
    </>
  )
  
}