import { NavLink } from "react-router-dom"
import PageHeader from "../components/PageHeader/PageHeader"

export default function ShoppingListPage() {

    return (
        <>
            <PageHeader>Shopping list</PageHeader>
            


            <NavLink to="..">
                <h4>Back to main</h4>
            </NavLink>

            
        </>
    )
}