import { useState } from "react"
import { FaPenToSquare } from "react-icons/fa6"
import { FaCheck } from "react-icons/fa6";
import Button from "../../../Button/Button"


export default function ItemDisplayNormal({children}) {
  const [onEdit, setOnEdit] = useState(false)

  return (
    !onEdit ?
    <>
      <p>{children}</p>
      <Button className="icon--btn" onClick={() => setOnEdit(true)}><FaPenToSquare /></Button>
    </> : 
    <>
      <input type="text" />
      <Button className="icon--btn edit" ><FaCheck /></Button>
    </>
  )
  
}