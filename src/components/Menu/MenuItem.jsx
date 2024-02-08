import Button from "../Button/Button"
import "./MenuItem.css"

export default function MenuItem({children, onClick}) {

  return (
    <Button 
      className="menu--item" 
      type="button"
      onClick={onClick}
    >
      {children}
    
    </Button>
  )
  
}