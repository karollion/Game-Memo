import styles from './OneScore.module.scss';
import React from 'react';
import { Score } from '../../../redux/scoreRedux';

interface OneScoreProps {
  data: Score;
}

const OneScore: React.FC<OneScoreProps> = ({ data }) : JSX.Element => {

  return (
    <li className={styles.root} >
      {data.points}
    </li>
  );
}

export default OneScore;