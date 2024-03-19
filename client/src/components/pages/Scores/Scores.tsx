import styles from './Scores.module.scss';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';
import OneScore from '../../features/OneScore/OneScore';

// import from redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchScores, selectAllScores, selectIsLoading } from '../../../redux/scoreRedux';

const Scores: React.FC = () : JSX.Element => {
  const dispatch = useAppDispatch()
  const scores = useAppSelector((state) => state.AllScores.scores);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchScores());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <h1>Scores</h1>
      <MenuButton nav={''}>Back</MenuButton>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {scores.map((score) => (
            <OneScore key={score.id} data={score}/>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Scores;