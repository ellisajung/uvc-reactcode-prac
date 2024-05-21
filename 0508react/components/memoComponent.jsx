import { useMemo } from 'react';

export function MemoComponent({ a, b }) {
  // a와 b의 합을 계산하는데 많은 비용이 드는 연산
  const expensiveOperation = useMemo(() => a + b, [a, b]);

  return <div>{expensiveOperation}</div>;
}