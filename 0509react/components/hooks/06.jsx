import { useState, useEffect } from 'react';

export function useKeyColorChange(colors) {
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    const handleKeypress = (event) => {
      if (keyCount == colors.length - 1) {
        setKeyCount(0);
      } else {
        setKeyCount(keyCount + 1);
      }
    };

    window.addEventListener('keypress', handleKeypress);

    return () => {
      window.removeEventListener('keypress', handleKeypress);
    };
  });

  return colors[keyCount];
}