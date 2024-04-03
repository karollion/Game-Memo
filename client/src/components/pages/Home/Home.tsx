import styles from './Home.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';
import { selectUser } from '../../../redux/userRedux';

const Home: React.FC = () : JSX.Element => { 
  const user = useSelector(selectUser);

  if(user) console.log(user.name)

  return (
    <div className={styles.root}>
      <h1>Home Page</h1>
      <MenuButton nav={'game'}>Start Game</MenuButton>
      <MenuButton nav={'scores'}>Scores</MenuButton>
      <MenuButton nav={'instruction'}>Instruction</MenuButton>
      {!user ?<MenuButton nav={'signup'}>Sign up</MenuButton> : null }
      {!user ?<MenuButton nav={'login'}>Login</MenuButton> : null }
      {user ?<MenuButton nav={'logout'}>Logout</MenuButton> : null }
      {user ? <p>Welcome  {user.name}</p> : null }
    </div>
  );
};

export default Home;