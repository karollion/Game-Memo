import styles from './Game.module.scss';
import React from 'react';

const Game: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Game</h1>
        </div>
    );
}

export default Game;