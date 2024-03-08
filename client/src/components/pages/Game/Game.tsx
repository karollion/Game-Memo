import styles from './Game.module.scss';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StopWatchRef } from '../../features/StopWatch/StopWatch';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';
import Victory from '../../features/Victory/Victory';
import StopWatch from '../../features/StopWatch/StopWatch';

const Game: React.FC = () : JSX.Element => {
  const navigate = useNavigate();
  const timeRef = useRef<StopWatchRef>(null);
  const [finish, setFinish] = useState<boolean>(false);
  const [finishTime, setFinishTime] = useState<string>('');

  const finishGame = (): void => {
    setFinish(true);
    stopStopWatch();
  };

  const quitGame = (): void => {
    navigate("/");
  }

  const time = (time : string): void => {
    setFinishTime(time);
  }

  const startStopWatch = (): void => {
    if (timeRef.current) {
      timeRef.current.startTimer();
    }
  }

  const stopStopWatch = (): void => {
    if (timeRef.current) {
      timeRef.current.stopTimer();
    }
  }

  const resetStopWatch = (): void => {
    if (timeRef.current) {
      timeRef.current.resetTimer();
    }
  }

  return (
    <div className={styles.root}>
      <StopWatch action={time} ref={timeRef}/>
      <Container>
      <button onClick={startStopWatch}>Start</button>
      <button onClick={stopStopWatch}>Stop</button>
      <button onClick={resetStopWatch}>Reset</button>
        <Board finishGame={finishGame} startStopWatch={startStopWatch}/>
      </Container>
      {finish && <Victory action={quitGame} finishTime={finishTime} />}
    </div>
  );
};

export default Game;