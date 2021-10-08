import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as style from './navbar.module.scss';
import logo from '/src/images/logo-s.svg';

const Navbar = () => {
    const [click, setClick] = useState(false);
    //const handleClick = () => setClick(!click);
    const handleClick = () => setClick((prevState) => !prevState);
    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <Link exact to="/" className={style.navLogo}>
                    <img src={logo} alt="logo" />
                </Link>

                <ul className={click ? style.navMenuActive : style.navMenu}>
                    <li className={style.navItem}>
                        <Link className={style.navLinks} activeClassName={style.active} to="/">
                            ГЛАВНАЯ
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link
                            className={style.navLinks}
                            activeClassName={style.active}
                            to="/catalog"
                        >
                            КАТАЛОГ
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link
                            className={style.navLinks}
                            activeClassName={style.active}
                            to="/contacts"
                        >
                            КОНТАКТЫ
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={style.navLinks} activeClassName={style.active} to="/about">
                            О НАС
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={style.navLinks} activeClassName={style.active} to="/price">
                            ЦЕНЫ
                        </Link>
                    </li>
                </ul>
                <button className={style.navIcon} onClick={handleClick}>
                    {click ? <BurgerMenuClose /> : <BurgerMenu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

const BurgerMenu = () => {
    return (
        <>
            <div className={style.navMenuLine}></div>
            <div className={style.navMenuLine}></div>
            <div className={style.navMenuLine}></div>
        </>
    );
};
const BurgerMenuClose = () => {
    return (
        <>
            <div className={style.navMenuClose}></div>
            <div className={style.navMenuClose}></div>
            <div className={style.navMenuClose}></div>
        </>
    );
};
