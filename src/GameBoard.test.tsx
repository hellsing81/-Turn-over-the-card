import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GameBoard from './GameBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


describe('GameBoard', ()=> { //describe: Это блок, который группирует связанные тесты
    it ('should render the game board', ()=> { //it: Это отдельный тест. В данном случае, тест проверяет, что компонент GameBoard корректно отображается.
        render(<GameBoard/>)
        expect(screen.getByText('Ходов: 0')).toBeInTheDocument(); //render: Функция, которая рендерит компонент в виртуальном DOM для тестирования.
        expect(screen.getByText('Начать заново')).toBeInTheDocument();
    });

    it ('should initialize the game when "Начать заново" button is clicked', () => {
        render(<GameBoard/>);
        fireEvent.click(screen.getByText('Начать заново')); //fireEvent: Функция, которая имитирует события, такие как клик.
        expect(screen.getByText('Ходов: 0')).toBeInTheDocument(); //expect: Проверяем, что после клика на кнопку "Начать заново" количество ходов снова становится 0.
    })

    it ('should increment moves when a card is clicked', async ()=> {
        render(<GameBoard/>);
        const card = screen.getAllByRole('button')[0]; //getAllByRole('button'): Получаем все элементы с ролью button, которые в данном случае являются картами.
        fireEvent.click(card); //fireEvent.click(card): Имитируем клик на первую карту.
        expect(await screen.findByText('Ходов: 1')).toBeInTheDocument(); //waitFor: Ждем, пока текст "Ходов: 1" появится в документе. Это нужно, потому что изменение состояния может быть асинхронным.
    });

    it('should show a toast message when the game is won', async () => {
        render(
          <>
            <GameBoard />
            <ToastContainer />
          </>
        );
        // Click on all cards to win the game
        const cards = screen.getAllByRole('button');
        cards.forEach((card) => fireEvent.click(card));
    
        // Wait for the toast message to appear
        await waitFor(() => expect(screen.findByText('Вы выиграли! Поздравляю!')).toBeInTheDocument());
    });
});