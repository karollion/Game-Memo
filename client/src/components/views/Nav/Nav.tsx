import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import React from 'react';

const Nav: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <p>
               Nawigacja linki do stron
            </p>
            <NavLink  to="/">Home</NavLink>
            <NavLink  to="/game">Game</NavLink>
            <NavLink  to="/instruction">Instruction</NavLink>
            <NavLink  to="/scores">Scores</NavLink>
        </div>
    );
};

export default Nav;