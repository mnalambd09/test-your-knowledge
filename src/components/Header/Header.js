import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined } to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Usefull NavLink</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
            <p className='hea'>Common Header</p>
        </div>
    );
};

export default Header;