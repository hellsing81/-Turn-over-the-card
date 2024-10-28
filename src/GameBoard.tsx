import React, {useState, useEffect} from 'react';
import Card from './Card';

const GameBoard: React.FC = () => {
    const [cards, setCards] = useState<string[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);

    useEffect(() => {
        const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const shuffledCards = [...cardValues, ...cardValues].sort(()=> Math.random() - 0.5);
        setCards(shuffledCards);
    },[])

    const handleCardClick = (index: number) => {
        if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) 
        {
            return;
        }
        setFlippedCards([...flippedCards,index]);

        if (flippedCards.length === 1) {
            if (cards[flippedCards[0]] === cards[index]) {
                setMatchedCards([...matchedCards, ...flippedCards, index]);
            }
            setTimeout(()=> setFlippedCards([]),1000);
        }
    };
    return (
        <div className="flex flex-wrap justify-center">
            {cards.map((card,index) => (
                <Card 
                key={index}
                value={card}
                isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                onClick={()=> handleCardClick(index)}
                />
            ))}
        </div>
    )
}
export default GameBoard;