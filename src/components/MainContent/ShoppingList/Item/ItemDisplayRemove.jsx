import { useContext } from "react"
import { AppContext } from "../../../../App"
import { ItemContext } from "./Item"
import { FaRegTrashCan } from "react-icons/fa6"
import Button from "../../../Button/Button"

export default function ItemDisplayRemove({children}) {
  const { updateItem, deleteItem } = useContext(AppContext)
  const { id } = useContext(ItemContext)

  function unCheckItem() {
    updateItem(id, "checked", false)
  }
  
  return (
    <>
      <p onClick={unCheckItem}>{children}</p>
      <Button className="icon--btn delete--btn" onClick={() => deleteItem(id)}><FaRegTrashCan /></Button>
    </>
  )
}