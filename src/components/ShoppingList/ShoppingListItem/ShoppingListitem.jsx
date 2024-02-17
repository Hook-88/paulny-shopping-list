import { MdCheckBoxOutlineBlank } from "react-icons/md"
import "./ShoppingListItem.css"

export default function ShoppingListItem({children}) {
    // TODO add state to change icon after clicked

    return (
        <li className="shopping-list-item">
            <MdCheckBoxOutlineBlank 
                style={
                    {
                        fontSize: "1.5rem"
                    }
                }
            />
            {children}
        </li>
    )
}