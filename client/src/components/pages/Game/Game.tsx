import styles from './Game.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';
import Victory from '../../common/Victory/Victory';

const Game: React.FC = () : JSX.Element => {
  const navigate = useNavigate();
  const [finish, setFinish] = useState<boolean>(false);

  const finishGame = (): void => {
    setFinish(true);
  };

  const backToMenu = (): void => {
    navigate("/");
  }

  return (
    <div className={styles.root}>
      <Container>
        <Board finishGame={finishGame} />
      </Container>
      {finish && <Victory action={backToMenu} />}
    </div>
  );
};

export default Game;