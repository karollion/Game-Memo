import styles from './Home.module.scss';
import React from 'react';

// import modules
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';



const Home: React.FC = () : JSX.Element => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/game");
    }
    
    return (
        <div className={styles.root}>
            <h1>Home Page</h1>
            <Button action={handleClick}>Start Game</Button>
        </div>
    );
};

export default Home;