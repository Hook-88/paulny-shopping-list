import classNames from "classnames"
import "./Button.css"

export default function Button({children, onClick, className, variant, ...rest}) {
    const buttonClassName = classNames(
        "button",
        className
    )

    if (variant === "no-button") {
        
        return (
            <div
                onClick={onClick} 
                className={buttonClassName} 
                {...rest}
            >
                {children}
            </div>
        )
    }

    return (
        <button 
            onClick={onClick} 
            className={buttonClassName} 
            {...rest}
        >
            {children}
        </button>
    )
    
}