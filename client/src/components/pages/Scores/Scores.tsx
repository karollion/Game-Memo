import styles from './Scores.module.scss';
import React from 'react';

const Scores: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Scores</h1>
        </div>
    );
}

export default Scores;