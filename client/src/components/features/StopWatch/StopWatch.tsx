import styles from './StopWatch.module.scss';
import React from 'react';
import convertMsToTime from '../../../utils/convertMsToTime';

interface StopWatchProps {
  time: number;
}

const StopWatch: React.FC<StopWatchProps> = ({ time }) : JSX.Element => {

  return (
    <div className={styles.root}>
      <span className={styles.timer}>{convertMsToTime(time)}</span>
    </div>
  );
}

export default StopWatch;