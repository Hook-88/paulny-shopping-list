import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { MdCheckBox } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
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
            <FaRegTrashCan />
        </li>
    )
}