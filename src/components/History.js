import React from 'react';
import './Board.css'

const History = ({history, moveTo, currentMove}) => {
    return (
        <div className="history">
        <ul style={{color : "rgb(0, 167, 0)" }}>
            {history.map((_,move)=>{
                return(
                    <li  key={move}>
                        <button style = {{fontWeight : move === currentMove ? "bold" : "normal", color : move === currentMove? 'rgb(0, 167, 0)' : 'white'}} onClick={()=>{moveTo(move);}} type="button">{move===0? 'Go to the game' : `Go to move #${move}`}</button>
                    </li>
                );
            })}
        </ul>
        </div>
    )
}

export default History
