import { useState, useContext } from "react"
import useToggle from "../../../Hooks/useToggle"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { MdCheckBox } from "react-icons/md"
import { FaRegTrashCan } from "react-icons/fa6"
import { ShoppingListContext } from "../../../pages/ShoppingListPage"
import Button from "../../Button/Button"
import "./ShoppingListItem.css"

export default function ShoppingListItem({children, item}) {
    const { deleteItem } = useContext(ShoppingListContext)

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
            <Button variant="no-button" onClick={() => deleteItem(item.id)}><FaRegTrashCan /></Button>
        </li>
    )
}