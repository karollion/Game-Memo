import styles from './Home.module.scss';
import React from 'react';

const Home: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;