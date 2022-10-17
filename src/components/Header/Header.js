import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import image from '../logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={image} alt="" />
            </div>
            <div>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/Home'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/grap'>Graph</NavLink>
                </nav>
            </div>

        </div>
    );
};

export default Header;