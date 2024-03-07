import styles from './Board.module.scss';
import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import { useSelector } from 'react-redux';
import { editCard, selectAllCards, shuffleCards } from '../../../redux/cardsRedux';
import { Card } from '../../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import Victory from '../../common/Victory/Victory';

interface BoardProps {
    children?: any;
}

const Board: React.FC<BoardProps> = ({ children }) : JSX.Element => {
  const dispatch = useDispatch();
  const [lockClick, setLockClick] = useState<boolean>(false);
  const [firstCard, setFirstCard] = useState<Card | undefined>(undefined);
  const [secondCard, setSecondCard] = useState<Card | undefined>(undefined);
  const [guessedCards, setGuessedCards] = useState<Card[] >([]);
  const cards = useSelector(selectAllCards);
  const numRows = Math.sqrt(cards.length);
  const numCols = cards.length / numRows;  

  /**
   * The function adds the selected card to the firstCard/secondCard variables and reverses it.
   * @param card - selected card 
   */
  const addCards = ( card : Card ) => {
    if (!firstCard) {
      setFirstCard(card);
      dispatch(editCard({ ...card, isFlipped: !card.isFlipped }));
    } else if (!secondCard && firstCard.id !== card.id) {
      setSecondCard(card);
      dispatch(editCard({ ...card, isFlipped: !card.isFlipped }));
    }
  }
  
  /**
   * The function compares two selected cards. 
   * If the cards differ, they are put back face down. 
   * If the cards are the same, they are added to the guessedCards array
   */
  const compareCards = ( ) => {
    if ( firstCard && secondCard ) {
      if (firstCard.image === secondCard.image) {
        setGuessedCards((cards) => [...cards, firstCard, secondCard]); 
        setFirstCard(undefined);
        setSecondCard(undefined);
      } else {
        dispatch(editCard({ ...firstCard, isFlipped: true }));
        dispatch(editCard({ ...secondCard, isFlipped: true }));
        setFirstCard(undefined);
        setSecondCard(undefined);
      }
    } 
    
    if (guessedCards.length === 16) {
      console.log('Wygrana')
    }
  }
  
  // Card shuffling at component startup
  useEffect(() => {
    dispatch(shuffleCards());
  }, [dispatch]);
  
  // Blocking the ability to press a card, running the compare Cards function and unlocking card clicking
  useEffect(() => {
    setLockClick(true);
    setTimeout(() => {
      compareCards();
      setLockClick(false);
    }, 600);
  }, [firstCard, secondCard, guessedCards]); // eslint-disable-line

  return (
    <div className={styles.root}>
      {[...Array(numRows)].map((_, row) => (
        <div key={row} className="row">
          {[...Array(numCols)].map((_, col) => (
            <div key={col} className="col">
              <GameCard card={cards[row * numCols + col]} action={addCards} lockClick={lockClick}/>
            </div>
          ))}
        </div>
      ))}
      <Victory />
  </div>
  );
}

export default Board;