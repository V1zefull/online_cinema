import React from 'react';
import './navBarStyle.css'

const NavBarComponent = () => {
    return (
        <div className="header">
           <div className="container">
               <div className="navSearch">
                   <p>Online Cinema</p>
                   <input type="text"/>
               </div>
               <div className="nav">
                   <a>Home</a>
                   <a>Catalog</a>
                   <a>About Us</a>
                   <a>Login</a>
               </div>
           </div>
        </div>
    );
};

export default NavBarComponent;