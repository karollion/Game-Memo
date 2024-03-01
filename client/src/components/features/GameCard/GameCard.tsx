import styles from './GameCard.module.scss';
import React from 'react';

interface GameCardProps {
    children?: any;
}

const GameCard: React.FC<GameCardProps> = ({ children }) : JSX.Element => {

    const handleClick = () => {
    }

    return (
        <div 
            className={styles.root}
            onClick={handleClick}
        ></div>
    );
}

export default GameCard;