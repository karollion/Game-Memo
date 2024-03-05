import styles from './Board.module.scss';
import React, { useState } from 'react';
import GameCard from '../GameCard/GameCard';
import { useSelector } from 'react-redux';
import { selectShuffledCards } from '../../../redux/cardsRedux';
import { Card } from '../../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

interface BoardProps {
    children?: any;
}

const Board: React.FC<BoardProps> = ({ children }) : JSX.Element => {
  const dispatch = useDispatch();
  const [firstCard, setFirstCard] = useState<Card | undefined>(undefined);
  const [secondCard, setSecondCard] = useState<Card | undefined>(undefined);
  const [guessedCards, setGuessedCards] = useState<Card[] >([]);

  const cards = useSelector(selectShuffledCards);  

  const addCards = ( card : Card ) => {
    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  }

  const compareCards = (  ) => {
    if ( firstCard && secondCard ) {
      if (firstCard.image === secondCard.image) {
        console.log('Takie same' , firstCard , secondCard)
        setGuessedCards((cards) => [...cards, firstCard, secondCard]); 
        setFirstCard(undefined);
        setSecondCard(undefined);
      } else {
        console.log('Zakryć: ' , firstCard , secondCard);
        setFirstCard(undefined);
        setSecondCard(undefined);
      }
    } 
    
    if (guessedCards.length === 16) {
      console.log('Wygrana')
    }
  }
  
  compareCards();
  
  console.log('firstCard', firstCard)
  console.log('secondCard', secondCard)
  // console.log('cards', cards)
  console.log('guessedCards', guessedCards)

  return (
    <div className={styles.root}>
    {[0, 1, 2, 3].map((row) => (
      <div key={row} className="row">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="col">
            <GameCard card={cards[row * 4 + col]} action={addCards} />
          </div>
        ))}
      </div>
    ))}
  </div>
  );
}

export default Board;