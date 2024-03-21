import styles from './Home.module.scss';
import React, { useState } from 'react';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';

const Home: React.FC = () : JSX.Element => { 
  
  const [user, setUser] = useState<any>(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth');
      await console.log(response);
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // const fetchUserData = async () => {
  //   try {
  //     const response = await fetch('/auth/user');
  //     const userData = await response.json();
  //     setUser(userData);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };



  return (
    <div className={styles.root}>
      <h1>Home Page</h1>
      <MenuButton nav={'game'}>Start Game</MenuButton>
      <MenuButton nav={'scores'}>Scores</MenuButton>
      <MenuButton nav={'instruction'}>Instruction</MenuButton>
      <a href='http://localhost:3000/api/auth'>login</a>
      <a href='http://localhost:3000/api/auth/logout'>logout</a>
  
      {user ? (
        <div>
          <p>User: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}

    </div>
  );
};

export default Home;