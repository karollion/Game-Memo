import React from 'react';
interface BoardProps {
    finishGame: (cards: number) => void;
    startStopWatch: () => void;
}
declare const Board: React.FC<BoardProps>;
export default Board;
