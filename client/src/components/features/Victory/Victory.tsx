import styles from './Victory.module.scss';
import React from 'react';

interface VictoryProps {
  action: () => void;
  finishTime: string;
}
const Victory: React.FC<VictoryProps> = ({ action, finishTime }) : JSX.Element => {
  return (
    <div className={styles.root}>
      Victory
      <p>Your time: {finishTime}</p>
      <button type='button' onClick={action} >Back to Menu</button>
    </div>
  );
}

export default Victory;