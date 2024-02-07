import { useContext } from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({children, ...rest}) {
  const { toggle } = useContext(MenuContext)

  return (
    <Button {...rest} onClick={toggle} style={{height: "100%"}}>
      {children}
    </Button>
  )
  
}