import React from 'react';

const TurnButton = ({handleTurn, value}) => {
  return (
    <button value={value} onClick={handleTurn}>Turn Me Over</button>
  )
}

export default TurnButton;
