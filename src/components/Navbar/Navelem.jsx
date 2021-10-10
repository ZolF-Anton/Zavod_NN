import React, { useState } from 'react';
import { Link } from 'gatsby';
import { navItem, navLinks, imgActive, imgPass, active, navPhones } from './navbar.module.scss';

function Navelem(props) {
    const [flag, setFlag] = useState(false);
    const handleFlag = () => setFlag((prevState) => !prevState);
    return (
        <li className={navItem}>
            <img className={flag ? imgActive : imgPass} src={props.icon} alt='' />

            <Link
                className={navLinks}
                activeClassName={active}
                to={props.path}
                onClick={() => handleFlag()}
            >
                {props.name}
            </Link>
        </li>
    );
}
export { Navelem };

function NavPhone() {
    return (
        <div className={navPhones}>
            <a href='tel:+79991231245'>+7(999)123-12-45</a>
            <a href='tel:+79991231245'>+7(999)123-12-45</a>
        </div>
    );
}
export { NavPhone };
