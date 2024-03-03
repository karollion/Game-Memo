import styles from './Board.module.scss';
import React from 'react';
import GameCard from '../GameCard/GameCard';

interface BoardProps {
    children?: any;
}

const Board: React.FC<BoardProps> = ({ children }) : JSX.Element => {

  return (
    <div className={styles.root} >
      <div className='row'>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
      </div>
      <div className='row'>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
      </div>
      <div className='row'>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
      </div>
      <div className='row'>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
        <div className='col'><GameCard /></div>
      </div>
    </div>
  );
}

export default Board;