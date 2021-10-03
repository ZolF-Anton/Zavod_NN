import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as style from './navbar.module.scss';
// import { navbar } from './navbar.module.scss';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <Link exact to='/' className={style.navLogo}>
                    Zavod-LOGO
                </Link>

                <ul className={click ? style.navMenuActive : style.navMenu}>
                    <li className={style.navItem}>
                        <Link className={style.navLinks} activeClassName={style.active} to='/'>
                            ГЛАВНАЯ
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link
                            className={style.navLinks}
                            activeClassName={style.active}
                            to='/catalog'
                        >
                            КАТАЛОГ
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link
                            className={style.navLinks}
                            activeClassName={style.active}
                            to='/contacts'
                        >
                            КОНТАКТЫ
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={style.navLinks} activeClassName={style.active} to='/about'>
                            О НАС
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={style.navLinks} activeClassName={style.active} to='/price'>
                            ЦЕНЫ
                        </Link>
                    </li>
                </ul>
                <div className={style.navIcon} onClick={handleClick}>
                    <i>{click ? `XXXXXX` : `БУРГЕР`}</i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
