import classNames from "classnames"
import "./Button.css"

export default function Button({children, onClick, className}) {
  const buttonClassnames = classNames(
    "button",
    className
  )

  console.log(buttonClassnames)

  return (
    <span onClick={onClick} className="button--span">
      <button className={buttonClassnames}>{children}</button>
    </span>
  )
}