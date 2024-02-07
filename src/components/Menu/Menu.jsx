import { createContext, useState } from "react"
import "./Menu.css"

const MenuContext = createContext()

export default function Menu({children}) {
  const [on, setOn] = useState(false)

  function toggle() {
    setOn(prevOn => !prevOn)
  }

  return (
    <MenuContext.Provider value={{on, toggle}}>
      <div className="menu--container">
        {children}
      </div>
    </MenuContext.Provider>
  )

}

export { MenuContext }