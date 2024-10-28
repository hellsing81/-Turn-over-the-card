import React from 'react';
import GameBoard from './GameBoard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <GameBoard />
    </div>
  );
};

export default App;