import MenuButton from '../../common/MenuButton/MenuButton';
import styles from './Game.module.scss';
import React from 'react';

const Game: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Game</h1>
            <MenuButton nav={''}>Back</MenuButton>
        </div>
    );
}

export default Game;