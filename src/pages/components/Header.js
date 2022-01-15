import React from 'react'
import Navbar from '../../components/Navbar'

fetch("http://localhost:5000/login",{
    method: "POST",
    mode: 'no-cors',
    body: JSON.stringify({email: "umar.jere@gmail.com",password:"16001105"})
})
.then(res => {
    console.log(res)
})

function Header() {
    return (
        
            <Navbar>
                
            </Navbar>
        
    )
}

export default Header
