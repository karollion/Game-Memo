import styles from './Score.module.scss';
import React from 'react';
import { Score } from '../../../redux/scoreRedux';

interface ScoreProps {
  data: Score;
}

const Score: React.FC<ScoreProps> = ({ data }) : JSX.Element => {

  return (
    <li className={styles.root} >
      {data.points}
    </li>
  );
}

export default Score;