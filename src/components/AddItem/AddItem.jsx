import { useState, useContext } from "react"
import { ShoppingListContext } from "../../pages/ShoppingListPage"
import Card from "../Card/Card"

export default function AddItem() {
    const [formData, setFormData] = useState("")
    const { addNewItem } = useContext(ShoppingListContext)

    function handleSubmit(event) {
        event.preventDefault()
        addNewItem(formData)
        setFormData("")

    }

    function handleFormChange(event) {
        setFormData(event.target.value)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Gaseoas" onChange={handleFormChange} value={formData}/>
            </form>
        </Card>
    )
    
}