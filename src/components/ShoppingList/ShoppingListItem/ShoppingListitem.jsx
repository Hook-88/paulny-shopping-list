import "./ShoppingListItem.css"

export default function ShoppingListItem({children}) {
    
    return (
        <li className="shopping-list-item">{children}</li>
    )
}