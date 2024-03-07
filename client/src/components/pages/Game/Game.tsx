import styles from './Game.module.scss';
import React, { useState } from 'react';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';
import Victory from '../../common/Victory/Victory';

const Game: React.FC = () : JSX.Element => {
  const [finish, setFinish] = useState<boolean>(false);

  const finishGame = (): void => {
    setFinish(true);
  };

  return (
    <div className={styles.root}>
      <Container>
        <Board finishGame={finishGame} />
      </Container>
      {finish && <Victory />}
    </div>
  );
};

export default Game;