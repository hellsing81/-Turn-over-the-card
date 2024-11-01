import React from 'react';
import GameBoard from './GameBoard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-image">
      <GameBoard />
      <ToastContainer />
    </div>
  );
};

export default App;