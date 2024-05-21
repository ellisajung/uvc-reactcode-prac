import { useState, useCallback } from 'react';

export function ParentComponent() {
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 메모이제이션된 함수 생성
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Clicked {count} times</p>
      {/* 자식 컴포넌트에 메모이제이션된 함수 전달 */}
      <ChildComponent onClick={handleClick} />
      {/* <button onClick={handleClick}>Click me</button> */}
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}