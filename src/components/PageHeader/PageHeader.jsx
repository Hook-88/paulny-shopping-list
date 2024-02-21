
import PageHeaderCSS from "./PageHeader.module.css"

export default function PageHeader({children, onClick}) {

    return (
        <header className={PageHeaderCSS["page-header"]} onClick={onClick}>
            {children} 
        </header>
    )
    
}