export function MouseEvents() {
  // 각 이벤트에 대한 핸들러 함수 정의
  const handleClick       = () => console.log('onClick : 마우스 좌측 클릭!');
  const handleDoubleClick = () => console.log('onDoubleClick: 마우스 좌측 더블 클릭!');
  const handleMouseDown   = () => console.log('onMouseDown: 마우스 좌측 클릭 (눌렀을 때)');
  const handleMouseUp     = () => console.log('onMouseUp: 마우스 좌측 클릭 (뗐을 때)');
  const handleMouseEnter  = () => console.log('onMouseEnter: 마우스가 엘리먼트에 들어왔을 때');
  const handleMouseLeave  = () => console.log('onMouseLeave: 마우스가 엘리먼트를 떠났을 때');
  const handleMouseMove   = () => console.log('onMouseMove: 마우스가 엘리먼트에 들어와서 움직일 때');
  const handleContextMenu = (event) => {
    event.preventDefault(); // 기본 컨텍스트 메뉴를 방지
    console.log('onContextMenu : 마우스 우측 클릭');
  };

  // 이벤트 핸들러를 요소에 연결
  return (
    <div className="event-mouse event">
      <div onClick={handleClick}>onClick!</div>
      <div onDoubleClick={handleDoubleClick}>onDoubleClick!</div>
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>onMouseDown, onMouseUp</div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>onMouseEnter, onMouseLeave</div>
      <div onMouseMove={handleMouseMove}>onMouseMove</div>
      <div onContextMenu={handleContextMenu}>onContextMenu</div>
    </div>
  );
}