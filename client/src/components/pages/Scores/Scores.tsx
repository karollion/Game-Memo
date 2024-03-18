import styles from './Scores.module.scss';
import React, { useEffect } from 'react';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';
import Score from '../../features/Score/Score';

// import from redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchScores, selectAllScores, selectIsLoading } from '../../../redux/scoreRedux';

const Scores: React.FC = () : JSX.Element => {
  const dispatch = useDispatch();
  const scores = useSelector(selectAllScores);
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
            <Score key={score.id} data={score}/>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Scores;