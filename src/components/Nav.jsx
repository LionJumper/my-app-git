import React from 'react';
import nav from './Nav.module.css';

const Navbar = () =>{
    return(
        <nav className={nav.nav}>
            <div className={nav.nav__item}><a>Profile</a></div>
            <div className={nav.nav__item}><a>Messages</a></div>
            <div className={nav.nav__item}><a>News</a></div>
            <div className={nav.nav__item}><a>Music</a></div>
            <div className={nav.nav__item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar; 