import styles from './Game.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';
import Victory from '../../features/Victory/Victory';
import StopWatch from '../../features/StopWatch/StopWatch';

const Game: React.FC = () : JSX.Element => {
  const navigate = useNavigate();

  const [finish, setFinish] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const finishGame = (): void => {
    setFinish(true);
    stopStopWatch();
  };

  const quitGame = (): void => {
    resetStopWatch();
    navigate("/");
  }

  // ---------- stopWatch functions ----------- //
  const startStopWatch = () => {
    if (timer == null) {
      setTimer(setInterval(() => {
        setTime(time => time + 10);
      }, 10) as NodeJS.Timeout);
    }
  };

  const stopStopWatch = () => {
    clearInterval(timer!);
    setTimer(null);
  };

  const resetStopWatch = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer!);
    };
  }, [timer]);
  

  return (
    <div className={styles.root}>
      <StopWatch time={time} />
      <Container>
        <Board finishGame={finishGame} startStopWatch={startStopWatch}/>
      </Container>
      {finish && <Victory action={quitGame} time={time} />}
    </div>
  );
};

export default Game;