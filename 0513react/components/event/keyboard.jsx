export function KeyboardEvents() {
  // 키보드 이벤트 핸들러 정의
  const handleKeyDown = (event) => {
      console.log(`Key down: 키보드 눌렀을 때 (누른 키 : ${event.key})`);
  };

  const handleKeyUp = (event) => {
      console.log(`Key up: 키보드 뗐을 때 (뗀 키 : ${event.key})`);
  };

  return (
    <div className="event-form event">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="키보드로 입력해주세요"
      />
    </div>
  );
}