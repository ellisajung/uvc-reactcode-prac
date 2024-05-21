
import { useState } from 'react';

function useMouseOver() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }
  return [isMouseOver, handleMouseOver, handleMouseOut];
}

export function MouseOver03() {
  const [isMouseOver, handleMouseOver, handleMouseOut] = useMouseOver();
  return (
    <div>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          width: '200px', 
          height: '200px', 
          backgroundColor: isMouseOver ? 'lightblue' : 'lightgrey'
        }}
      >
        {isMouseOver ? 'In!' : 'Out!'}
      </div>
    </div>
  );
}
