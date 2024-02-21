import { IoCaretBackOutline } from "react-icons/io5";
import PageHeaderCSS from "./PageHeader.module.css"

export default function PageHeader({children, onClick}) {

    return (
        <header className={PageHeaderCSS["page-header"]} onClick={onClick}>
            <h1>{children}</h1>
        </header>
    )
    
}