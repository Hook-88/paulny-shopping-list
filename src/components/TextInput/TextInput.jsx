import classNames from "classnames"
import "./TextInput.css"

export default function TextInput({className, transparant, ...rest}) {
    const inputClassName = classNames(
        "text-input",
        {"transparant" : transparant},
        className
    )

    return <input type="text" className={inputClassName} {...rest}/>
    
}