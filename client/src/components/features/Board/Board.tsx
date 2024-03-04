import styles from './Board.module.scss';
import React from 'react';
import GameCard from '../GameCard/GameCard';

interface BoardProps {
    children?: any;
}

const Board: React.FC<BoardProps> = ({ children }) : JSX.Element => {

  let frontImages: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '0', '1', '2', '3', '4', '5', '6', '7'];

  return (
    <div className={styles.root} >
      <div className='row'>
        <div className='col'><GameCard frontImage={frontImages[0]} /></div>
        <div className='col'><GameCard frontImage={frontImages[1]} /></div>
        <div className='col'><GameCard frontImage={frontImages[2]} /></div>
        <div className='col'><GameCard frontImage={frontImages[3]} /></div>
      </div>
      <div className='row'>
        <div className='col'><GameCard frontImage={frontImages[4]} /></div>
        <div className='col'><GameCard frontImage={frontImages[5]} /></div>
        <div className='col'><GameCard frontImage={frontImages[6]} /></div>
        <div className='col'><GameCard frontImage={frontImages[7]} /></div>
      </div>
      <div className='row'>
        <div className='col'><GameCard frontImage={frontImages[8]} /></div>
        <div className='col'><GameCard frontImage={frontImages[9]} /></div>
        <div className='col'><GameCard frontImage={frontImages[10]} /></div>
        <div className='col'><GameCard frontImage={frontImages[11]} /></div>
      </div>
      <div className='row'>
        <div className='col'><GameCard frontImage={frontImages[12]} /></div>
        <div className='col'><GameCard frontImage={frontImages[13]} /></div>
        <div className='col'><GameCard frontImage={frontImages[14]} /></div>
        <div className='col'><GameCard frontImage={frontImages[15]} /></div>
      </div>
    </div>
  );
}

export default Board;