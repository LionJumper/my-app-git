import React from 'react';
import nav from './Nav.module.css';

const Navbar = () =>{
    return(
        <nav className={nav.nav}>
            <div className={nav.nav__item}><a  href="/Profile">Profile</a></div>
            <div  className={nav.nav__item}><a href="/Messages">Messages</a></div>
            <div  className={nav.nav__item}><a href="/News">News</a></div>
            <div  className={nav.nav__item}><a href="/Music">Music</a></div>
            <div  className={nav.nav__item}><a href="/Settings">Settings</a></div>
        </nav>
    );
}

export default Navbar; 