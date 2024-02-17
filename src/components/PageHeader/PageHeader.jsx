import { IoCaretBackOutline } from "react-icons/io5";
import "./PageHeader.css"

export default function PageHeader({children, onClick}) {

    return (
        <header className="page-header" onClick={onClick}>
            <h1>{children}</h1>
        </header>
    )
    
}