import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

const Nav: React.FC = () : JSX.Element => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <nav className={styles.navigation}>
        <div className={`${styles.navicon1} ${toggleNav ? styles.open : ''}`} onClick={() => setToggleNav((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {toggleNav ? 
          <ul>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/">Home</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/scores">Scores</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/instruction">Instruction</NavLink>
            <FontAwesomeIcon  className={styles.icon} icon={faVolumeHigh} />
            <FontAwesomeIcon  className={styles.icon} icon={faVolumeXmark} />

            
          </ul>
        : null}
      </nav>
    </div>
  );
};

export default Nav;