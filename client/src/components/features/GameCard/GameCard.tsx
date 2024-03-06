import styles from './GameCard.module.scss';
import React, {  } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, editCard } from '../../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

interface GameCardProps {
    children?: any;
    card: Card;
    action: (card : Card) => void;
}

const GameCard: React.FC<GameCardProps> = ({ card, action, children }) : JSX.Element => {
  const dispatch = useDispatch();
  //const [isFlipped, setIsFlipped] = useState<boolean>(true);

  const handleClick = (  ) => {
    
    dispatch(editCard({ ...card, isFlipped: !card.isFlipped }));
    //setIsFlipped(!isFlipped)
    action(card);
  }

  return (
    <div className={styles.root} >
      <ReactCardFlip isFlipped={card.isFlipped} flipDirection="vertical">
        <div className={styles.front} onClick={handleClick}>
        <img 
          className={styles.image}
          alt={card.name}
          src={'images/cards/' + card.image + ".png"} 
        />
        </div>

        <div className={styles.back} onClick={handleClick}>
          
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GameCard;