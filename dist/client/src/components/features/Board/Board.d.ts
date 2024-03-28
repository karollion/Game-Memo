import React from 'react';
interface BoardProps {
    finishGame: () => void;
    startStopWatch: () => void;
}
declare const Board: React.FC<BoardProps>;
export default Board;
