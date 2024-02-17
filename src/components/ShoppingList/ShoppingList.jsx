import Card from "../Card/Card"
import "./ShoppingList.css"

export default function ShoppingList({children}) {

    return (
        <Card
        >
            <ul className="shopping-list--container">
                {children}
            </ul>
        </Card>
    )
    
}