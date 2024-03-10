import convertMsToTime from '../../../utils/convertMsToTime';
import styles from './Victory.module.scss';
import React from 'react';
import { selectNumberOfClicks } from '../../../redux/gameRedux';
import { useSelector } from 'react-redux';

interface VictoryProps {
  action: () => void;
  time: number;
}
const Victory: React.FC<VictoryProps> = ({ action, time }) : JSX.Element => {
  const numberOfClick = useSelector(selectNumberOfClicks);

  return (
    <div className={styles.root}>
      Victory
      <p>Your time: {convertMsToTime(time)}</p>
      <p>You made {numberOfClick} moves</p>
      <button type='button' onClick={action} >Back to Menu</button>
    </div>
  );
}

export default Victory;