import React from 'react';
import { Card } from '../../../redux/cardsRedux';
interface GameCardProps {
    children?: any;
    card: Card;
    action: (card: Card) => void;
    startStopWatch: () => void;
}
declare const GameCard: React.FC<GameCardProps>;
export default GameCard;
