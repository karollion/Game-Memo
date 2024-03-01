import styles from './Game.module.scss';
import React from 'react';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';
import GameCard from '../../features/GameCard/GameCard';

const Game: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Game</h1>
            <MenuButton nav={''}>Back</MenuButton>
            <GameCard />
        </div>
    );
}

export default Game;