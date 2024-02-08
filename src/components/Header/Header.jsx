import AppMenu from "../AppMenu/AppMenu"
import Menu from "../Menu/Index"
import Button from "../Button/Button"
import "./Header.css"
import { AppContext } from "../../App"
import { useContext } from "react"

export default function Header({handleClick}) {
  const { toggleForm } = useContext(AppContext)

  return (
    <header className="card app--header" onClick={handleClick}>
      <h1>Paulny Shopping List</h1>
      <Menu className="app--menu">
        <Menu.Button>
          <Button variant="transparant light-text normal-font" >Mas descuento!</Button>
        </Menu.Button>
        <Menu.Dropdown>
          <Menu.Item onClick={toggleForm}>
            <Button>Add</Button>
          </Menu.Item>
          <Menu.Item>
            <Button>Sort</Button>
          </Menu.Item>
          <Menu.Item>
            <Button>Delete</Button>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </header>
  )

}