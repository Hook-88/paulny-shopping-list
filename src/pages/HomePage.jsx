import { NavLink } from "react-router-dom"
import MainNavItem from "../components/MainNavItem/mainNavItem"
import "./HomePage.css"


export default function HomePage() {
    
    return (
        <nav className="home-page--nav">
            <NavLink to="/shopping-list">
                <MainNavItem>Paulny Shopping list</MainNavItem>
            </NavLink>
        </nav>
    )
}