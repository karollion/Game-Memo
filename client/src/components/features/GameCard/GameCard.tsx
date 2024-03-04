import styles from './GameCard.module.scss';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface GameCardProps {
    children?: any;
    frontImage: string;
}

const GameCard: React.FC<GameCardProps> = ({ frontImage, children }) : JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  const handleClick = ( e: any ) => {
    e.preventDefault();
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={styles.root} >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className={styles.front} onClick={handleClick}>
        <img 
          className={styles.image}
          alt={frontImage}
          src={'images/cards/' + frontImage + ".png"} 
        />
        </div>

        <div className={styles.back} onClick={handleClick}>
          
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GameCard;