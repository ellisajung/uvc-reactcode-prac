import { useState, useEffect } from 'react';

export function useKeyboardEvent() {
  const [keyPressed, setKeyPressed] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyPressed(event.key);
    };

    const handleKeyUp = () => {
      setKeyPressed(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    //window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    // window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keyPressed;
}

