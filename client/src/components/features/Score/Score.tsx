import styles from './Score.module.scss';
import React from 'react';

interface ScoreProps {

}

const Score: React.FC<ScoreProps> = () : JSX.Element => {

  return (
    <div className={styles.root} >
      score
    </div>
  );
}

export default Score;