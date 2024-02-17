import { useState } from "react"
import Card from "../Card/Card"

export default function AddItem() {
    const [formData, setFormData] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()  
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