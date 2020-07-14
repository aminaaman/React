import React from 'react';
import { Link } from 'react-router-dom'
 function Navbar (){
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Pizza Land</Link>
                    
                    <ul className="right">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/cart">My order</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;