import styles from './OneScore.module.scss';
import React from 'react';
import { Score } from '../../../redux/scoreRedux';

interface OneScoreProps {
  data: Score;
}

const OneScore: React.FC<OneScoreProps> = ({ data }) : JSX.Element => {

  return (
    <div className={styles.root} >
      <div>
        <img src="data.user.avatar" alt="avatar" className={styles.img}/>
        {data.user.name}
      </div>
      <div>{data.cards}</div>
      <div>{String(data.winAt)}</div>
      <div>{data.moves}</div>
      <div>{data.time}</div>
      <div>{data.points}</div>
    </div>
  );
}

export default OneScore;