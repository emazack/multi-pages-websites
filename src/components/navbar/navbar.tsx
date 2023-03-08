import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/about">Our Company</NavLink>
                </li>
                <li>
                    <NavLink to="/locations">Locations</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}