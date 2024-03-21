import styles from './GameCard.module.scss';
import React, {  } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from '../../../redux/cardsRedux';

interface GameCardProps {
    children?: any;
    card: Card;
    action: (card : Card) => void;
    startStopWatch: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ card, action, startStopWatch, children }) : JSX.Element => {

  const handleClick = (  ) => {
    action(card);
    startStopWatch();
  }

  return (
    <div className={styles.root} >
      <ReactCardFlip isFlipped={card.isFlipped} flipDirection="vertical">
        <div className={styles.front}>
        <img 
          className={styles.image}
          alt={card.name}
          src={'images/cards/' + card.image + ".png"} 
        />
        </div>

        <div className={styles.back} onClick={handleClick}>
        <img 
          className={styles.image}
          alt={'card back'}
          src={"images/cards/back.jpg"} 
        />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GameCard;