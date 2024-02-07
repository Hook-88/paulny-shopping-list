import classNames from "classnames"

import "./TextInputField.css"

export default function TextInputField({className, variant, ...rest}) {
  const inputClassName = classNames(
    "text-input--input",
    variant,
    className
  )

  return (
    <input type="text" className={inputClassName} {...rest} />
  )
  
}