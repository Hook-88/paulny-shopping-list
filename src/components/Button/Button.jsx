import "./Button.css"

export default function Button({children, onClick}) {


  return (
    <span onClick={onClick} className="button--span">
      <button className="button">{children}</button>
    </span>
  )
}