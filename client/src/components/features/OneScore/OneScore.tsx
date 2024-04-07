import styles from './OneScore.module.scss';
import React from 'react';
import { Score } from '../../../redux/scoreRedux';
import formatDate from '../../../utils/formatDate';
import formatTime from '../../../utils/formatTime';

interface OneScoreProps {
  data: Score;
}

const OneScore: React.FC<OneScoreProps> = ({ data }) : JSX.Element => {

  return (
    <div className={styles.root} >
      <div>
        <img src="data.user.avatar" alt="avatar" className={styles.img}/>
        {data.user && data.user.name}
      </div>
      <div>{data.cards}</div>
      <div>{formatDate(String(data.winAt))}</div>
      <div>{data.moves}</div>
      <div>{formatTime(data.time)}</div>
      <div>{data.points}</div>
    </div>
  );
}

export default OneScore;