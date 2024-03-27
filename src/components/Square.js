import React from 'react';
import './Board.css';

const Square = ({value, onClick, iswinnerindex}) => {
    const newvalue = value;
    return (
        <button type="button" className="btn" style={{color : newvalue === 'X'? 'orange':'red', fontWeight: iswinnerindex? 'bold' : 'normal'}} onClick={onClick}>{value}</button>
    )
}

export default Square;
