import { useAtom } from 'jotai';
import { atom } from 'jotai';

// atom 함수는 Jotai에서 상태를 생성하는 주요 함수입니다.
// 이 함수는 초기 상태를 인자로 받아 atom을 반환합니다.
// 여기서 countAtom은 초기 값 0을 가진 atom입니다.
const countAtom = atom(0);

// StateJotai 컴포넌트에서 useAtom 훅을 사용하여 countAtom에 저장된 상태를 count에 바인딩하고, 이 상태를 변경할 수 있는 setCount 함수를 받아옵니다.
export function StateJotai() {
  const [count, setCount] = useAtom(countAtom);
  // handleClick 함수는 클릭 이벤트가 발생할 때 호출되며
  const handleClick = () => {
    // setCount 함수를 사용하여 count 값을 1 증가시킵니다.
    setCount(count + 1)
  }
  
  return (
    <div>
      <b>Jotai</b>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}