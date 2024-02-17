import classNames from "classnames"

import "./Card.css"

export default function Card({children, className, ...rest}) {
    const cardClassName = classNames(
        "card",
        className
    )

    return (
        <div className={cardClassName} {...rest}>
            {children}
        </div>
    )
    
}