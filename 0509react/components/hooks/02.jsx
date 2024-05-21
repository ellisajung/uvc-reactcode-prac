// customHook.jsx
import { useEffect, useState } from "react";

export function useMemberInfo(initialValue, inputId) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handleChange = (event) => {
      setValue(event.target.value);
    }

    const input = document.getElementById(inputId);
    
    input.addEventListener('input', handleChange);

    return () => {
      input.removeEventListener('input', handleChange);
    }
  }, [inputId]);

  return value;
}