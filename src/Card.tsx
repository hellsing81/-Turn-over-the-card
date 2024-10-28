import React from "react";
interface CardProps {
    value: string;
    isFlipped: boolean;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({value, isFlipped, onClick}) => {
    return (
        <div
        className={`w-24 h-24 m-2 rounded-lg shadow-lg cursor-pointer ${isFlipped ? 'bg-blue-500' : 'bg-gray-300'}`}
        onClick={onClick}
        >
        <div
        className="flex items-center justify-center h-full text-4xl font-bold">
            {isFlipped ? value : ''}
        </div>
        </div>
    );
};
export default Card;
