import classNames from "classnames"
import { createContext, useState } from "react"
import "./Menu.css"

const MenuContext = createContext()

export default function Menu({children, className}) {
  const [on, setOn] = useState(false)
  const divClassName = classNames (
    "menu--container",
    className
  )

  function toggle() {
    setOn(prevOn => !prevOn)
  }

  return (
    <MenuContext.Provider value={{on, toggle}}>
      <div className={divClassName}>
        {children}
      </div>
    </MenuContext.Provider>
  )

}

export { MenuContext }