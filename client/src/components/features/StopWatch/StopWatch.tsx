import styles from './StopWatch.module.scss';
import React, { useEffect, useState, useImperativeHandle } from 'react';
import convertMsToTime from '../../../utils/convertMsToTime';

interface StopWatchProps {
  action: (time: string) => void;
}

export interface StopWatchRef {
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

const StopWatch: React.ForwardRefRenderFunction<StopWatchRef, StopWatchProps> = ({ action }, ref) : JSX.Element => {
  const [time, setTime] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useImperativeHandle(ref, () => ({
    startTimer: startTimer,
    stopTimer: stopTimer,
    resetTimer: resetTimer,
  }));

  const startTimer = () => {
    if (timer == null) {
      setTimer(setInterval(() => {
        setTime(time => time + 10);
      }, 10) as NodeJS.Timeout);
    }
  };

  const stopTimer = () => {
    clearInterval(timer!);
    setTimer(null);
  };

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer!);
    };
  }, [timer]);

  action(convertMsToTime(time));

  return (
    <div className={styles.root}>
      <span className={styles.timer}>{convertMsToTime(time)}</span>
    </div>
  );
}

export default React.forwardRef(StopWatch);