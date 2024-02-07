import classNames from "classnames"
import "./Button.css"

// export default function Button({children, onClick, className, variant = "", type = "button"}) {
//   const buttonClassnames = classNames(
//     "button--span",
//     className,

//   )

//   return (
//     <span onClick={onClick} className={buttonClassnames}>
//       <button className="button" type={type}>{children}</button>
//     </span>
//   )
// }

export default function Button({children, className, variant, ...rest}) {
  const buttonClassName = classNames(
    "button",
    variant,
    className
  )

  return (
    <button 
      className={buttonClassName} 
      {...rest} 
    >
      {children}
    </button>
  )

}