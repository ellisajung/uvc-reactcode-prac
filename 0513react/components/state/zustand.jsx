import { create } from 'zustand';

// create 함수는 Zustand 스토어를 생성합니다. 이 함수는 설정 함수를 인자로 받으며, 여기서는 상태와 상태를 변경하는 메소드를 정의합니다.
const useStore = create(set => ({
  // 초기 상태로 count는 0으로 설정되며, increment 함수는 현재 상태(state)를 받아 새로운 상태 객체를 반환합니다. 여기서는 count 값을 1 증가시키는 로직입니다.
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));

// StateZustand 함수 컴포넌트에서는 useStore 훅을 호출하여 count 상태와 increment 함수를 추출합니다.
export function StateZustand() {
  const { count, increment } = useStore();
  return (
    <div>
      <b>Zustand</b>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
}