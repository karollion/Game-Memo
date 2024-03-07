import styles from './StopWatch.module.scss';
import React, { useEffect, useState } from 'react';
import convertMsToTime from '../../../utils/convertMsToTime';

interface StopWatchProps {
  action: ( time : string ) => void;
}
const StopWatch: React.FC<StopWatchProps> = ({ action }) : JSX.Element => {
  const [time, setTime] = useState<number>(0);
  const [timer, setTimer] = useState<any>(null);

  const startTimer = () => {
    if(timer == null){
      setTimer(setInterval(() => {
        setTime(time => time + 1);
      }, 1));
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };
  
  const resetTimer = () => {
    setTime(0);
  };
  
  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.root}>
      <span className={styles.timer}>{convertMsToTime(time)}</span>
    </div>
  );
}

export default StopWatch;