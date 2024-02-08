import { useContext } from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({children, ...rest}) {
  const { toggle } = useContext(MenuContext)

  function handleClick(event) {
    event.stopPropagation()
    toggle()
  }

  return (
    <div {...rest} onClick={handleClick}>
      {children}
    </div>
  )
  
}