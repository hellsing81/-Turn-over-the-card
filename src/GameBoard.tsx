import React, { useState, useEffect } from 'react';
import Card from './Card';
import bleu from './images/bleu.png';
import boss from './images/boss.png';
import burberry from './images/burberry.png';
import polo from './images/polo.png';
import valentino from './images/valentino.png';
import versace from './images/versace.png';
import  {toast} from 'react-toastify';



const GameBoard: React.FC = () => {
    const [cards, setCards] = useState<{ src: string }[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState<number>(0);

    useEffect(()=>{
        initializeGame();
    },[])
    const initializeGame = () => {
        const cardValues = [
            {src: bleu},
            {src: boss},
            {src: burberry},
            {src: polo},
            {src: valentino},
            {src: versace},
        ];
        const shuffledCards = [...cardValues,...cardValues].sort(()=> Math.random()- 0.5);
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    }


    const handleCardClick = (index: number) => {
        if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
            return;
        }

        setFlippedCards([...flippedCards, index]);
        if (flippedCards.length === 1) {
            if (cards[flippedCards[0]].src === cards[index].src) {
                setMatchedCards([...matchedCards, ...flippedCards, index]);
                if (matchedCards.length + 2 === cards.length) {
                    toast.success('Вы выиграли! Поздравляю!', {
                        className: 'toast-large',
                    });
                    initializeGame();
                }
            }
            setTimeout(() => setFlippedCards([]), 1000);

            setMoves((prevMoves)=> {
                const newMoves = prevMoves +1;
                if (newMoves > 10) {
                    toast.error('Вы проиграли! Начните заново.', {
                        className: 'toast-large',
                    });
                    initializeGame();
                }
                return newMoves;
            })
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 text-2xl font-bold text-black-600">Ходов: {moves}</div>
            <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
            onClick={initializeGame}
            >
                Начать заново
            </button>
            <div className="flex flex-wrap justify-center">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        value={card}
                        isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;