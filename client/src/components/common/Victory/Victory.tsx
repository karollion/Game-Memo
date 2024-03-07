import styles from './Victory.module.scss';
import React from 'react';

interface VictoryProps {
  action: () => void;
}
const Victory: React.FC<VictoryProps> = ({ action }) : JSX.Element => {
  return (
    <div className={styles.root}>
      Victory
      <button type='button' onClick={action} >Back to Menu</button>
    </div>
  );
}

export default Victory;