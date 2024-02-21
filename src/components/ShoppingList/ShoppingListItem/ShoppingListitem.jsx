import { useState, useContext } from "react"
import classNames from "classnames"
import useToggle from "../../../Hooks/useToggle"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { MdCheckBox } from "react-icons/md"
import { FaRegTrashCan } from "react-icons/fa6"
import { ShoppingListContext } from "../../../pages/ShoppingListPage"
import Button from "../../Button/Button"
import "./ShoppingListItem.css"

export default function ShoppingListItem({children, item}) {
    const { deleteItem, toggleCheckItem } = useContext(ShoppingListContext)
    const { id, checked } = item
    const spanClassName = classNames(
        "shopping-list-item--span", 
        {"checked" : checked}
    )

    function handleDelete(event) {
        event.stopPropagation()
        deleteItem(id)
    }

    return (
        <li className="shopping-list-item" onClick={() => toggleCheckItem(id)}>
            {
                checked ? 
                <MdCheckBox /> :
                <MdCheckBoxOutlineBlank />
            }
            
            <span className={spanClassName}>
                {children}
            </span>
            <Button variant="no-button" onClick={handleDelete}><FaRegTrashCan /></Button>
        </li>
    )
}