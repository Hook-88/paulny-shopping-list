import { NavLink } from "react-router-dom"
import MainNavItem from "../components/MainNavItem/MainNavItem"
import HomePageCSS from "./HomePage.module.css"


export default function HomePage() {
    
    return (
        <nav className={HomePageCSS.nav}>
            <NavLink to="/shopping-list">
                <MainNavItem>Paulny Shopping list</MainNavItem>
            </NavLink>
        </nav>
    )
}