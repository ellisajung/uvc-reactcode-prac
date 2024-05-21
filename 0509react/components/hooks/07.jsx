import { useState, useEffect } from 'react';

export function useIncrementCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
    };

    const box = document.querySelector('.box07'); //class 검색 
    box.addEventListener('click', handleIncrement);

    return () => {
      window.removeEventListener('click', handleIncrement);
    };
  }, []);

  return count;
}