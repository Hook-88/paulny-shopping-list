import { ShoppingListContext } from "../../pages/ShoppingListPage"
import { useContext } from "react"
import Card from "../Card/Card"
import Button from "../Button/Button"
import MultiActionCSS from "./MultiAction.module.css"

export default function MultiAction() {
    const { deleteItems } = useContext(ShoppingListContext)

    return (
        <Card className={MultiActionCSS.wrapper}>
            <Button variant="danger" onClick={deleteItems}>Delete Checked</Button>
            <Button variant="succes">Uncheck Checked</Button>
        </Card>
    )
}