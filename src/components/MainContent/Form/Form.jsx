import classNames from "classnames"
import "./Form.css"

export default function Form({children, className, ...rest}) {
  const formClassname = classNames(
    "card",
    "form--container",
    className
  )
  
  return (
    <form className={formClassname} {...rest}>
      {children}
    </form>
  )
}