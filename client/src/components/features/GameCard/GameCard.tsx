import styles from './GameCard.module.scss';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from '../../../redux/cardsRedux';
import { SOUNDS_URL } from '../../../config';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';
import { selectGameSoundsToggle } from '../../../redux/gameRedux';

interface GameCardProps {
    children?: any;
    card: Card;
    action: (card : Card) => void;
    startStopWatch: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ card, action, startStopWatch, children }) : JSX.Element => {
  const [play] = useSound(SOUNDS_URL +'turn.mp3');
  const soundsToggler = useSelector(selectGameSoundsToggle);

  const handleClick = (  ) => {
    action(card);
    if (soundsToggler) play();
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