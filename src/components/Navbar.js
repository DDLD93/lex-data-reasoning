import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <nav>
            <header className="header">
                <img src="" alt="logo" />
                <h3 className="title">Digital Reasoning</h3>
            </header>
            <ul>
                <li className="contact">React out to us</li>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
            </ul>

        </nav>
    )
}

export default Navbar
