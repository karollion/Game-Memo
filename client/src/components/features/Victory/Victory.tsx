import convertMsToTime from '../../../utils/convertMsToTime';
import styles from './Victory.module.scss';
import React from 'react';

interface VictoryProps {
  action: () => void;
  time: number;
}
const Victory: React.FC<VictoryProps> = ({ action, time }) : JSX.Element => {
  return (
    <div className={styles.root}>
      Victory
      <p>Your time: {convertMsToTime(time)}</p>
      <button type='button' onClick={action} >Back to Menu</button>
    </div>
  );
}

export default Victory;