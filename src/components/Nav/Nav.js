import { NavLink } from 'react-router-dom'
import './Nav.sass'

export default function Nav() {
    return (
    <>
        <div id="title-container">
            <h1>Maxwill Winters</h1>
            <h2>Front & Backend Web Developer</h2>
        </div>
        <div id='nav-links'>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/info'>Info</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
        </>
    )
}