import classNames from "classnames"

import "./Card.css"

export default function Card({children, className}) {
    const cardClassName = classNames(
        "card",
        className
    )

    return (
        <div className={cardClassName}>
            {children}
        </div>
    )
    
}