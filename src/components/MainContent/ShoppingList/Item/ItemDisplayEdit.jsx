import { useContext } from "react"
import { ItemContext } from "./Item"
import Form from "../../Form/Form"
import Button from "../../../Button/Button"


export default function ItemDisplayEdit() {
  const { itemObj } = useContext(ItemContext)
  const { name } = itemObj

  return (
    <div className="item--display edit">
      <Form>
        <input type="text" placeholder={name} />
      </Form>
    </div>
  )
}