// NavBar.js
import React, {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {INavBarProps} from "../constants/interfaces/Navbar.interfaces";
import {useTranslation} from "react-i18next";

const NavBar = (props: INavBarProps) => {
    const {setRenderNavBarOptionNumber} = props;

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const {t} = useTranslation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <HomeIcon fontSize={'large'}/>
                {!showMenu ?
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <MenuIcon fontSize={'large'}/>
                    </div> :
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <CloseIcon fontSize={'large'}/>
                    </div>
                }
                <ul className={`navbar-menu ${showMenu ? 'active' : ''}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="navbar-item"><a style={{cursor: 'pointer'}} onClick={() => {
                        setRenderNavBarOptionNumber(0);
                    }}>{t('NavBar.abt_me')}</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="navbar-item"><a style={{cursor: 'pointer'}} onClick={() => {
                        setRenderNavBarOptionNumber(1);
                    }}>{t('NavBar.blogs')}</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="navbar-item"><a style={{cursor: 'pointer'}} onClick={() => {
                        setRenderNavBarOptionNumber(2);
                    }}>{t('NavBar.projects')}</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

