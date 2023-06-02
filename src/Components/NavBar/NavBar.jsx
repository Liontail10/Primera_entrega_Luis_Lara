import React from 'react'
import "./NavBar.css"
import CardWidget from "../CardWidget/CardWidget"

function NavBar() {
    return (
        <nav className='Nav'>
            <ul className='Ul'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Compras</li>
                <li>Información</li>
                <li>
                    <CardWidget />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar