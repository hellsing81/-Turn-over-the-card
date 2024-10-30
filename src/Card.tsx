import React from 'react';

interface CardProps {
  value: { src: string };
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ value, isFlipped, onClick }) => {
  return (
    <div
      className={`w-64 h-64 m-2 rounded-lg shadow-lg cursor-pointer ${
        isFlipped ? 'bg-blue-500' : 'bg-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full text-4xl font-bold">
        {isFlipped ? <img src={value.src} alt="card" className="w-full h-full object-cover rounded-lg" /> : '?'}
      </div>
    </div>
  );
};

export default Card;