import classNames from "classnames"
import "./Button.css"

export default function Button({children, onClick, className, variant = ""}) {
  const buttonClassnames = classNames(
    "button--span",
    className,

  )

  return (
    <span onClick={onClick} className={buttonClassnames}>
      <button className="button">{children}</button>
    </span>
  )
}