import { FaRegTrashCan } from "react-icons/fa6"
import Button from "../../../Button/Button"

export default function ItemDisplayRemove({children}) {
  
  return (
    <>
      <p>{children}</p>
      <Button className="icon--btn" onClick={() => setOnEdit(true)}><FaRegTrashCan /></Button>
    </>
  )
}