import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Navelem } from './Navelem';
import { NavPhone } from './Navelem';
import * as style from './navbar.module.scss';
import logo from '/src/images/logo-s.svg';
import logoT from '/src/images/logo-s-t.svg';
import home from '../../images/icons/nav/home.svg';
import list1 from '../../images/icons/nav/list1.svg';
import contacts from '../../images/icons/nav/contacts.svg';
import about from '../../images/icons/nav/about.svg';
import price from '../../images/icons/nav/price.svg';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick((prevState) => !prevState);
    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <Link exact to='/' className={style.navLogo}>
                    <img src={logo} alt='logo' />
                    <img src={logoT} alt='logo' />
                </Link>

                <ul className={click ? style.navMenuActive : style.navMenu}>
                    <Navelem path={'/'} name={'ГЛАВНАЯ'} icon={home} />
                    <Navelem path={'/catalog'} name='КАТАЛОГ' icon={list1} />
                    <Navelem path={'/contacts'} name='КОНТАКТЫ' icon={contacts} />
                    <Navelem path={'/about'} name='О НАС' icon={about} />
                    <Navelem path={'/price'} name={'ПРАЙС'} icon={price} />
                </ul>
                <NavPhone />
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
