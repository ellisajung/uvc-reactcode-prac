import { useState, useEffect} from 'react'

export function useHook() {
  const [hook, setHook] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleHook = (event) => {
      setHook({
          x: event.clientX,
          y: event.clientY
      });
    };

    window.addEventListener('click', handleHook);

    return () => {
        window.removeEventListener('click', handleHook);
    }
  });

  return hook;
}