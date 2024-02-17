import { IoCaretBackOutline } from "react-icons/io5";
import "./PageHeader.css"

export default function PageHeader({children}) {

    return (
        <header className="page-header">
            <h1>{children}</h1>
        </header>
    )
    
}