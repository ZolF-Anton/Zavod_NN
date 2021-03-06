import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Navelem } from './Navelem';
import { NavPhone } from './Navelem';
import {
    navbar,
    navContainer,
    navLogo,
    navMenuActive,
    navMenu,
    navIcon,
    navMenuLine,
    navMenuClose,
} from './navbar.module.scss';
import logo from '/src/images/logo-s.svg';
import logoT from '/src/images/logo-s-t.svg';
import home from '../../images/icons/nav/home.svg';
import list1 from '../../images/icons/nav/list1.svg';
import about from '../../images/icons/nav/about.svg';
import price from '../../images/icons/nav/price.svg';
// import contacts from '../../images/icons/nav/contacts.svg';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick((prevState) => !prevState);

    return (
        <nav className={navbar}>
            <div className={navContainer}>
                <Link exact to="/" className={navLogo}>
                    <img src={logo} alt="logo" />
                    <img src={logoT} alt="logo" />
                </Link>

                <ul className={click ? navMenuActive : navMenu}>
                    <Navelem path={'/'} name={'ГЛАВНАЯ'} icon={home} />
                    <Navelem path={'/catalog'} name="КАТАЛОГ" icon={list1} />
                    {/* <Navelem path={'/contacts'} name="КОНТАКТЫ" icon={contacts} /> */}
                    <Navelem path={'/price'} name={'ПРАЙС'} icon={price} />
                    <Navelem path={'/about'} name="О НАС" icon={about} />
                </ul>
                <NavPhone />
                <button className={navIcon} onClick={handleClick}>
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
            <div className={navMenuLine}></div>
            <div className={navMenuLine}></div>
            <div className={navMenuLine}></div>
        </>
    );
};
const BurgerMenuClose = () => {
    return (
        <>
            <div className={navMenuClose}></div>
            <div className={navMenuClose}></div>
            <div className={navMenuClose}></div>
        </>
    );
};
