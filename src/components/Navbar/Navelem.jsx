import React, { useState } from 'react';
import { Link } from 'gatsby';
import { navItem, navLinks, imgActive, imgPass, active, navPhones } from './navbar.module.scss';

function Navelem(props) {
    const [flag, setFlag] = useState(false);
    const isActive = ({ isCurrent }) => {
        //return isCurrent ? setFlag(true) : setFlag(false);
        setFlag(isCurrent);
    };

    //const handleFlag = () => setFlag((prevState) => !prevState);
    return (
        <li className={navItem}>
            <img className={flag ? imgActive : imgPass} src={props.icon} alt='' />
            <Link className={flag ? active : navLinks} getProps={isActive} to={props.path}>
                {props.name}
            </Link>
        </li>
    );
}
export { Navelem };

function NavPhone() {
    return (
        <div className={navPhones}>
            <a href='tel:+79094125558'>+7(909)412‐55‐58</a>
            <a href='tel:+78633033044'>+7(863)303-30-44</a>
        </div>
    );
}
export { NavPhone };
