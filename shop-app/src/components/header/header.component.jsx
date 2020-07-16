import React from 'react';
import {Link} from 'react-router-dom';

import './header.style.css';

const Header = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <img className="logo" src="https://queercafe.net/tv40.jpg" height="60px" width="100px" alt="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/">SHOP</Link>
            <Link className="option" to="/">CONTACT</Link>
        </div>
    </div>
)

export default Header;