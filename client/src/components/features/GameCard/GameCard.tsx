import styles from './GameCard.module.scss';
import React from 'react';

interface GameCardProps {
    children?: any;
}

const GameCard: React.FC<GameCardProps> = ({ children }) : JSX.Element => {

    const handleClick = () => {
    }

    return (
        <button 
            className={styles.button}
            onClick={handleClick}
        ></button>
    );
}

export default GameCard;