import React,{useState} from 'react';
import Board from './components/Board';
import './App.css';
import { calculateWinner } from './Calculate';
import History from './components/History';
import Message from './components/Message';

function App() {
    const NEWGAME= [ {board :Array(9).fill(null) , isNext : true} ];
    const [history, sethistory] = useState(NEWGAME);
    // const [board, setboard] = useState();
    // const [isNext, setisNext] = useState(false);
    const [currentMove , setcurrentMove] = useState(0);

    const current = history[currentMove];  
    console.log(history);
    
    const {winner, winnerindex} = calculateWinner(current.board);


    const squarehandler=(position)=>{
        // console.log(position);
        if(current.board[position] || winner ){
            return;
        }
        sethistory((prev)=>{
            const last = prev[prev.length -1];
            const newboard=  last.board.map((square, pos) =>{
                if(pos === position){
                    return last.isNext? 'X':'O';
                }
                return square;
            })
            // return prev.concat({ board: newboard , isNext: !last.isNext});
            return [...prev,{board: newboard , isNext: !last.isNext} ];
        });
        setcurrentMove((value) =>{return value +1;})
        // setisNext((prev) =>{return !prev});
    };
    const moveTo = (move)=>{
        setcurrentMove(move);
    }
    const NewGame = ()=>{
        sethistory(NEWGAME);
        setcurrentMove(0);
    }
  return (
    <div className="app">
    <h1>TIC <span style = {{color: 'rgb(0, 167, 0)'}} >TAC</span> TOE</h1>
    {/* <h2>{message}</h2> */}
    <Message winner = {winner} current = {current} />
    <Board board={current.board} squarehandler={squarehandler} winnerindex={winnerindex} />
    <button type="button" onClick={NewGame} className={`btn-reset ${winner && 'btn-reset-active'}`}>Start New Game</button>
    <h2>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
