import styles from './StopWatch.module.scss';
import React from 'react';

interface StopWatchProps {
  action: ( time : string ) => void;
}
const StopWatch: React.FC<StopWatchProps> = ({ action }) : JSX.Element => {
  return (
    <div className={styles.root}>
      StopWatch
    </div>
  );
}

export default StopWatch;