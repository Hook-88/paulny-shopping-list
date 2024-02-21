import Card from "../Card/Card"
import "./MainNavItem.css"


export default function MainNavItem({children}) {

    return (
        <Card className="main-nav-item">
            <h1>
                {children}
            </h1>
        </Card>
    )
}