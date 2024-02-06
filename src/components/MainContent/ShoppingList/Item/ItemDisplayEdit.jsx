import { useContext, useRef } from "react"
import { ItemContext } from "./Item"
import Form from "../../Form/Form"
import Button from "../../../Button/Button"


export default function ItemDisplayEdit() {
  const { itemObj } = useContext(ItemContext)
  const inputRef = useRef(null)
  const { name } = itemObj

  function handeChange() {
    console.log(inputRef.current.value)
  }

  return (
    <div className="item--display edit">
      <Form>
        <input type="text" placeholder={name} ref={inputRef} onChange={handeChange} />
      </Form>
    </div>
  )
}