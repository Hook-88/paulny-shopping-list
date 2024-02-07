import Button from "../Button/Button"
import "./MenuItem.css"

export default function MenuItem({children}) {

  return (
    <Button className="menu--item">{children}</Button>
  )
  
}