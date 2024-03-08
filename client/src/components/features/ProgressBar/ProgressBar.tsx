import styles from './ProgressBar.module.scss';
import React, {  } from 'react';

interface ProgressBarProps {
  quantityCards: number;
  guessedCards: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ quantityCards, guessedCards }) : JSX.Element => {

  const progress: number = Math.floor((guessedCards * 100)/quantityCards)
  
  return (
    <div className={styles.root} >
      <div className={styles.bar} style={{width: progress + `%`}}></div>
    </div>
  );
}

export default ProgressBar;