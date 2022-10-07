import Board from './Board'
import React,{useState} from 'react';
import { calculateWinner } from '../helper';
import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
    const boardCopy = [...board]
    
    if(winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : 'O'

    setBoard(boardCopy)
    setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Refresh</button>
        )
    }

    return (
        <div className="wrapper">
            
            <Board squares={board} click={handleClick} />
            {startNewGame()}
            <p className="game_info">
            
                {winner ? 'The winner : '+ winner : 'Player Turn : ' + (xIsNext ? 'X' : 'O')}
            </p>
            
        </div>
    )
}

export default Game;

