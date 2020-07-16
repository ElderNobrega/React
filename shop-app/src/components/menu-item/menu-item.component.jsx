import React from 'react';

import './menu-item.style.css'
import { Link } from 'react-router-dom';

const MenuItem = ({id, title, imageUrl, size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <Link key={id} to={'/items/' + `${id}`}>
            <span className="subtitle">SHOP NOW</span>
            </Link>
        </div>
    </div>
)

export default MenuItem