import styles from './Home.module.scss';
import React from 'react';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';

const Home: React.FC = () : JSX.Element => {  

  return (
    <div className={styles.root}>
      <h1>Home Page</h1>
      <MenuButton nav={'game'}>Start Game</MenuButton>
      <MenuButton nav={'scores'}>Scores</MenuButton>
      <MenuButton nav={'instruction'}>Instruction</MenuButton>
      <MenuButton nav={'auth'}>Sign in</MenuButton>
      <a href='http://localhost:3000/auth'>sign in</a>
    </div>
  );
};

export default Home;