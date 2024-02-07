import classNames from "classnames"
import "./DoubleButton.css"

export default function DoubleButton({children, className, ...rest}) {
  const doubleButtonClassName = classNames(
    "db-btn--container",
    className
  )

  return (
    <div 
      className={doubleButtonClassName}
      {...rest}
    >
      {children}
    </div>
  )

}