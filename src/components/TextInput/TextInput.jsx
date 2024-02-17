import classNames from "classnames"
import "./TextInput.css"

export default function TextInput({className, ...rest}) {
    const inputClassName = classNames(
        "text-input",
        className
    )

    return <input type="text" className={inputClassName} {...rest}/>
    
}