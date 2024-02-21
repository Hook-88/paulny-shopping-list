import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { MdCheckBox } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "../../Button/Button"
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
            <span className="shopping-list-item--span">
                {children}
            </span>
            <Button variant="no-button"><FaRegTrashCan /></Button>
        </li>
    )
}