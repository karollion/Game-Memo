import React from 'react';
interface VictoryProps {
    action: () => void;
    time: number;
    moves: number;
}
declare const Victory: React.FC<VictoryProps>;
export default Victory;
