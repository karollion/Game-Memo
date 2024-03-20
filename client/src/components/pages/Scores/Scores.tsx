import styles from './Scores.module.scss';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';
import OneScore from '../../features/OneScore/OneScore';
import Container from '../../common/Container/Container';

// import from redux
import { useSelector } from 'react-redux';
import { fetchScores, selectIsLoading } from '../../../redux/scoreRedux';

const Scores: React.FC = () : JSX.Element => {
  const dispatch = useAppDispatch()
  const scores = useAppSelector((state) => state.AllScores.scores);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchScores());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Container>
        <h1>Scores</h1>
        <MenuButton nav={''}>Back</MenuButton>
        <div className={styles.topTable} >
          <div><p>Name</p></div>
          <div><p>Cards</p></div>
          <div><p>Date</p></div>
          <div><p>Moves</p></div>
          <div><p>Time</p></div>
          <div><p>Points</p></div>
        </div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {scores.map((score) => (
                <OneScore key={score.id} data={score}/>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Scores;