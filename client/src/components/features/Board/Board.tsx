import styles from './Board.module.scss';
import React from 'react';

interface BoardProps {
    children?: any;
}

const Board: React.FC<BoardProps> = ({ children }) : JSX.Element => {

  return (
    <div className={styles.root} >
      
    </div>
  );
}

export default Board;