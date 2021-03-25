import { Link } from 'react-router-dom'
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="navigation topnav">
                <Link to='/games' className="active">Games</Link>
                <a>News</a>
                <Link to='/login'>Log In</Link>
                <a>Register</a>
            </div>
        </div>
    )
}

export default Header
