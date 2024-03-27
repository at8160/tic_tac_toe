import React from 'react'

const Message = ({winner, current}) => {
    const noMoreleft = current.board.every((element) =>{
        return element !== null;
    })
    return (
        <h2>
            {winner && (
            <> Winner is {' '}
                <span style={{color : 'rgb(0, 167, 0)'}}>
                    {winner}
                </span>
            </>)}
            {!winner && !noMoreleft && (
            <> Next Turn is {current.isNext? <span style ={{color : 'orange'}}>X</span> : <span style={{color :"red"}}>O</span>}
            </>)}
            {!winner && noMoreleft && (
            <> <span style ={{color : 'orange'}} >X</span> and <span style ={{color : 'red'}}>O</span> tied
            </>)}
        </h2>
    )
}

export default Message
