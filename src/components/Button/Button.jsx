import classNames from "classnames"
import "./Button.css"

export default function Button({children, onClick, className = ""}) {
  const spanClassnames = classNames(
    "button--span",
    className
  )

  console.log(spanClassnames)

  return (
    <span onClick={onClick} className="button--span">
      <button className="button">{children}</button>
    </span>
  )
}