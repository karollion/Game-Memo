import styles from './Game.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';
import Victory from '../../features/Victory/Victory';
import StopWatch from '../../features/StopWatch/StopWatch';

const Game: React.FC = () : JSX.Element => {
  const navigate = useNavigate();
  const [finish, setFinish] = useState<boolean>(false);
  const [stopWatchTime, setStopWatchTime] = useState<string>('');

  const finishGame = (): void => {
    setFinish(true);
  };

  const backToMenu = (): void => {
    navigate("/");
  }

  const time = (time : string): void => {
    setStopWatchTime(time);
    console.log(stopWatchTime)
  }

  return (
    <div className={styles.root}>
      <StopWatch action={time}/>
      <Container>
        <Board finishGame={finishGame} />
      </Container>
      {finish && <Victory action={backToMenu} />}
    </div>
  );
};

export default Game;