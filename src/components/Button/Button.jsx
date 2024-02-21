import classNames from "classnames"
import ButtonCSS from "./Button.module.css"

export default function Button({children, onClick, className, variant, ...rest}) {
    const buttonClassName = classNames(
        ButtonCSS.button,
        ButtonCSS[variant],
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