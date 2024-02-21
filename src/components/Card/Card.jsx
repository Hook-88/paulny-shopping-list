import classNames from "classnames"

import CardCSS from "./Card.module.css"

export default function Card({children, className, ...rest}) {
    const cardClassName = classNames(
        CardCSS.card,
        className
    )

    return (
        <div className={cardClassName} {...rest}>
            {children}
        </div>
    )
    
}