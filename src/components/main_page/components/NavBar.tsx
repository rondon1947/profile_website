// NavBar.js
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <HomeIcon fontSize={'large'} />
                {!showMenu ?
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <MenuIcon fontSize={'large'}/>
                    </div>  :
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <CloseIcon fontSize={'large'}/>
                    </div>
                }
                <ul className={`navbar-menu ${showMenu ? 'active' : ''}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="navbar-item"><a onClick={() => {}}>About Me</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="navbar-item"><a>Daily Blogs</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="navbar-item"><a>Projects</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

