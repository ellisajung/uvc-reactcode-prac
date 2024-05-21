import { useKeyboardEvent } from './04'; // 키보드 hook 불러오기

export function KeyboardTracker04() {
  const keyPressed = useKeyboardEvent(); // 키보드 이벤트 hook 사용
  //const inputValue = e.target.value;
  return (
    <>
      <div>눌린 키: {keyPressed}</div> {/* 눌린 키 정보 표시 */}
    </>
  );
}