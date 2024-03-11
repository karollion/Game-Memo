import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import React, { useState } from 'react';

const Nav: React.FC = () : JSX.Element => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <nav className={styles.navigation}>
        <button
          className={styles.toggleBtn}
          onClick={() => setToggleNav((prev) => !prev)}>
          {toggleNav ? 'x' : '='}
        </button>
        {toggleNav ? 
          <ul>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/">Home</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/game">Game</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/instruction">Instruction</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/scores">Scores</NavLink>
          </ul>
        : null}
      </nav>
    </div>
  );
};

export default Nav;