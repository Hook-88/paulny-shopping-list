import { useState, useContext, useRef } from "react"
import classNames from "classnames"
import useToggle from "../../../Hooks/useToggle"
import getStrFirstCharCap from "../../../Utility/getStrFirstCharCap"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { MdCheckBox } from "react-icons/md"
import { FaRegTrashCan } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md";
import { ShoppingListContext } from "../../../pages/ShoppingListPage"
import Button from "../../Button/Button"
import TextInput from "../../TextInput/TextInput"
import "./ShoppingListItem.css"

export default function ShoppingListItem({item}) {
    const { id, checked, name } = item
    const { deleteItem, toggleCheckItem, updateItemName } = useContext(ShoppingListContext)
    const [edit, toggleEdit] = useToggle(false) 
    const [formData, setFormData] = useState(name)

    const spanClassName = classNames(
        "shopping-list-item--span", 
        {"checked" : checked}
    )

    function handleDelete(event) {
        event.stopPropagation()
        deleteItem(id)
    }

    function handleEdit(event) {
        event.stopPropagation()
        toggleEdit()
    }

    function handleFormChange(event) {
        updateItemName(id, event.target.value)
        setFormData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData === "") {
            deleteItem(id)

            return
        }
        updateItemName(id, formData)
        toggleEdit()
        
    }

    return (
        <li className="shopping-list-item" onClick={() => toggleCheckItem(id)}>
            {
                checked ? 
                <MdCheckBox /> :
                <MdCheckBoxOutlineBlank />
            }
            {
                edit ?
                <form onSubmit={handleSubmit}>
                    <TextInput 
                        value={name ? getStrFirstCharCap(name) : ""} 
                        transparant 
                        onClick={(event => event.stopPropagation())}
                        onChange={handleFormChange}
                        autoFocus
                    />
                </form> : 
                <span className={spanClassName}>
                    {name ? getStrFirstCharCap(name) : ""}
                </span>

            }
                {
                    checked ?
                    <Button variant="no-button" onClick={handleDelete}><FaRegTrashCan /></Button> :
                    <Button variant="no-button" onClick={handleEdit}><MdModeEdit /></Button>
                }
        </li>
    )
}