import styles from './Game.module.scss';
import React from 'react';

// import components
import Board from '../../features/Board/Board';
import Container from '../../common/Container/Container';

const Game: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <Container>
                <Board />
            </Container>
        </div>
    );
}

export default Game;