import styles from './Scores.module.scss';
import React from 'react';

//import components
import MenuButton from '../../common/MenuButton/MenuButton';
import Score from '../../features/Score/Score';

const Scores: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Scores</h1>
            <MenuButton nav={''}>Back</MenuButton>
            <Score />
        </div>
    );
}

export default Scores;