import React from 'react'
import logo from "../assets/logo.png"
import "./navbar.css"

function Navbar() {
    const toggle = (e) => {
        let mobileViews = document.querySelector(".mobile-view")
        let body = document.querySelector(".body")
        let nav = document.querySelector("nav")
        body.classList.add("nav-toggle")
        nav.classList.add("nav-toggle")
        mobileViews.classList.add("toggle")
        console.log(e.target)

       
    }
    return (
        <div>
        <nav>
            <header className="header">
                <img src={logo} width="50" height="50" alt="logo" />
                <h3 className="title">Digital Reasoning</h3>
            </header>
            <ul id='list' className='small-navbar' >
                <li className="contact"><a className='button' href="#">Contact Us</a></li>
                <li><a href="#">Home</a></li>
                <li className='list' >
                <a className='list' href="#"> 
                    
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
            <div onClick={toggle} className="burger">
                <hr />
                <hr style={{borderBlockColor:"var(--primary-color)",width:"20px"}} />
                <hr />
            </div>
        </nav>
        <div className="mobile-view">
                <ul>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Services</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
