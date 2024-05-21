import { useRef, useEffect } from 'react';

export function RefComponent() {
  const inputEl = useRef(null);

  const focusTextInput = () => {
    inputEl.current.focus();
  };

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 입력 요소에 포커스를 줍니다.
    focusTextInput();
  }, []);

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusTextInput}>Focus the input</button>
    </div>
  );
}