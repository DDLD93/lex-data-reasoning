import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <nav>
            <header className="header">
                <img src="" alt="logo" />
                <h3 className="title">Digital Reasoning</h3>
            </header>
            <ul style={{display:"flex", alignItems:"center",gap:"20px"}} >
                <li style={{visibility:"hidden"}} className="contact"><a href="#">Contact Us</a></li>
                <li><a href="#">Home</a></li>
                <li style={{display:"flex", alignItems:"center"}} >
                <a style={{display:"flex", alignItems:"center"}} href="#"> 
                    
                <svg width="25" height="25" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" fill="#E5E5E5"/>
                    <rect width="33" height="33" fill="white"/>
                    <circle cx="12" cy="12" r="7" fill="#F39220"/>
                    <circle cx="30" cy="12" r="7" fill="#2B2B2B"/>
                    <circle cx="12" cy="31" r="7" fill="#2B2B2B"/>
                    <circle cx="30" cy="31" r="7" fill="#F39220"/>
                </svg>
                    Services</a></li>
                <li><a href="#">About</a></li>
            </ul>

        </nav>
    )
}

export default Navbar
