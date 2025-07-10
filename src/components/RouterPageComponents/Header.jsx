import React from 'react';
import { NavLink } from 'react-router';
import styles from './RouterPage.module.sass';
import classNames from 'classnames';

const linkStyle = ({ isActive }) =>
  classNames(styles.link, { [styles.active]: isActive });

function Header () {
  return (
    <header>
      <nav className={styles.navContainer}>
        <ul className={styles.ulLink}>
          <li className={styles.navLi}>
            <NavLink to='/' className={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className={styles.navLi}>
            <NavLink to='/components' className={linkStyle}>
              Components
            </NavLink>
          </li>
          <li className={styles.navLi}>
            <NavLink to='/about' className={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
