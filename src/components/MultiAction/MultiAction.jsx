import Card from "../Card/Card"
import Button from "../Button/Button"
import MultiActionCSS from "./MultiAction.module.css"

export default function MultiAction() {

    return (
        <Card className={MultiActionCSS.wrapper}>
            <Button variant="danger">Delete Checked</Button>
            <Button variant="succes">Uncheck Checked</Button>
        </Card>
    )
}