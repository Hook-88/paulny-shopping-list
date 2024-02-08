import Button from "../Button/Button"
import "./MenuItem.css"

export default function MenuItem({children, onClick}) {

  return (
    <div className="menu--item" onClick={onClick}>
      {children}
    </div>
  )
}