import styles from './Home.module.scss';
import React from 'react';

// import modules
import MenuButton from '../../common/MenuButton/MenuButton';
import { useNavigate } from 'react-router-dom';



const Home: React.FC = () : JSX.Element => {
    
    
    return (
        <div className={styles.root}>
            <h1>Home Page</h1>
            <MenuButton nav={'game'}>Start Game</MenuButton>
            <MenuButton nav={'scores'}>Scores</MenuButton>
            <MenuButton nav={'instruction'}>Instruction</MenuButton>
        </div>
    );
};

export default Home;