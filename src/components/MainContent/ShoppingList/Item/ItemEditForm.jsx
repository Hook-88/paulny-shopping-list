import { useEffect, useRef, useState, useContext } from "react"
import { FaCheck } from "react-icons/fa6"
import { ItemContext } from "./Item"
import { AppContext } from "../../../../App"
import getCapString from "../../../../utility/getCapString"
import Button from "../../../Button/Button"

export default function ItemEditForm() {
  const { name, id } = useContext(ItemContext)
  const { updateItem } = useContext(AppContext)
  const [inputText, setInputText] = useState(name)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleInputChange(event) {
    setInputText(event.target.value)
  }

  function saveChange() {
    updateItem(id, "name", inputText)
    // setOnEdit(false)
  }

  return (
    <form
      style={
        {
          display: "flex",
          width: "100%"
        }
      }
    >
      <input type="text" ref={inputRef} onChange={handleInputChange} value={getCapString(inputText)}/>
      <Button className="icon--btn edit" onClick={saveChange}><FaCheck /></Button>
    </form>
  )
  
}