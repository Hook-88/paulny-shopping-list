import { useState, useContext } from "react"
import classNames from "classnames"
import useToggle from "../../../Hooks/useToggle"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { MdCheckBox } from "react-icons/md"
import { FaRegTrashCan } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md";
import { ShoppingListContext } from "../../../pages/ShoppingListPage"
import Button from "../../Button/Button"
import TextInput from "../../TextInput/TextInput"
import "./ShoppingListItem.css"

export default function ShoppingListItem({children, item}) {
    const { deleteItem, toggleCheckItem, updateItem } = useContext(ShoppingListContext)
    const { id, checked } = item
    const [formData, setFormData] = useState(children)

    const spanClassName = classNames(
        "shopping-list-item--span", 
        {"checked" : checked}
    )

    function handleDelete(event) {
        event.stopPropagation()
        deleteItem(id)
    }

    function handleFormChange(event) {
        setFormData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        updateItem(id, formData)
        
    }


    return (
        <li className="shopping-list-item" onClick={() => toggleCheckItem(id)}>
            {
                checked ? 
                <MdCheckBox /> :
                <MdCheckBoxOutlineBlank />
            }
            
            {/* <span className={spanClassName}>
                {children}
            </span> */}
            <form onSubmit={handleSubmit}>
                <TextInput 
                    value={formData} 
                    transparant 
                    onClick={(event => event.stopPropagation())}
                    onChange={handleFormChange}
                />
            </form>
            
            <Button variant="no-button"><MdModeEdit /></Button>

            {/* <Button variant="no-button" onClick={handleDelete}><FaRegTrashCan /></Button> */}
        </li>
    )
}