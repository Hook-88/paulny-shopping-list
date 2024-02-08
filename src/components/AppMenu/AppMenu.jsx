import Menu from "../Menu/Index"
import { FaPlus } from "react-icons/fa"
import "./AppMenu.css"

export default function AppMenu({children}) {

  return (
    <div className="app-menu--container">
      <Menu>
        <Menu.Button variant="action">
          <FaPlus />
        </Menu.Button>
      </Menu>
    </div>
  )
  
}