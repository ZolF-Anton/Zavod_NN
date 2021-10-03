import React from 'react';
import { Link } from "gatsby";
import * as styles from './navbar.module.scss';
// import { navbar } from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/*<nav className={navbar}>*/}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/price'>Price</Link>
      <Link to='/catalog'>Catalog</Link>
    </nav>
  );
};

export default Navbar;
