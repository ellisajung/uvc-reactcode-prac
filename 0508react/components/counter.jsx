import { useState, useEffect } from 'react';

export function Counter() {
  // useState 훅을 사용하여 count 상태와 이를 업데이트하는 함수 setCount를 생성합니다.
  const [count, setCount] = useState(0);

  // useEffect를 사용하여 컴포넌트가 렌더링될 때마다 동작을 수행합니다.
  useEffect(() => {
    // 브라우저 제목을 업데이트합니다.
    document.title = `You clicked ${count} times`;

    // 컴포넌트가 언마운트되기 전에 정리 함수를 반환합니다.
    return () => {
      document.title = 'React App'; // 컴포넌트가 언마운트될 때 이전 타이틀로 복원합니다.
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>{'You clicked ' + count + ' times'}</p>
      <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}