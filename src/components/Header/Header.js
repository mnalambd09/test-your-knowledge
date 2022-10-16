import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                {/* <NavLink to='/Home'>Home</NavLink> */}
                <NavLink className={({isActive}) => isActive ? 'active' : undefined } to='/Home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {/* <NavLink to='/contact'>Usefull NavLink</NavLink> */}
                {/* <NavLink to='/posts'>Posts</NavLink> */}
            </nav>
        </div>
    );
};

export default Header;