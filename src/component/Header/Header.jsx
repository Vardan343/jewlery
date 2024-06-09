import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import {navbarLinks} from '../../constat/navbar'

function Header() {
    return (
        
        <header className="header">
            <nav className="navigation">
                <ul>
                    {navbarLinks.map((item) =>  <li><Link to={item.pathName}>{item.name}</Link> </li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
