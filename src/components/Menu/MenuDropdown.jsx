import { useContext } from "react"
import { MenuContext } from "./Menu"
import "./MenuDropdown.css"


export default function MenuDropdown({children}) {
  const { on } = useContext(MenuContext)

  return (
    on ?
    <ul className="menu-dropdown--container card">
      {children}
    </ul> : null
  )
  
}