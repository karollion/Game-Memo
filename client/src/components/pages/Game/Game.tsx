import styles from './Game.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resNumberOfClicks, selectNumberOfClicks } from '../../../redux/gameRedux';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';
import Victory from '../../features/Victory/Victory';
import StopWatch from '../../features/StopWatch/StopWatch';

// import from redux
import { useDispatch } from 'react-redux';
import { addScoreOnServer } from '../../../redux/scoreRedux';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userRedux';
import { Score } from '../../../redux/scoreRedux';

const Game: React.FC = () : JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const [finish, setFinish] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const moves = useSelector(selectNumberOfClicks);
  
  const finishGame = ( cards: number ): void => {
    setFinish(true);
    stopStopWatch();
    if(user) {
      const scoreData: Score = {
        points: 100,
        cards: cards,
        moves: moves,
        time: time,
        userId: user.id,
      };
      dispatch(addScoreOnServer(scoreData) as any);
    }
  };
  
  const quitGame = (): void => {
    dispatch(resNumberOfClicks());
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
        <Board 
          finishGame={finishGame} 
          startStopWatch={startStopWatch} 
        />
      </Container>
      {finish && <Victory action={quitGame} time={time} moves={moves} />}
    </div>
  );
};

export default Game;