import { NavLink } from "react-router-dom"
import PageHeader from "../components/PageHeader/PageHeader"
import AddItem from "../components/AddItem/AddItem"

export default function ShoppingListPage() {

    return (
        <>
            <PageHeader>Shopping list</PageHeader>
            <AddItem />

            <NavLink to="..">
                <h4>Back to main</h4>
            </NavLink>

            
        </>
    )
}