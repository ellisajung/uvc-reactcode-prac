import { useMovePosition } from './08-1';
import exampleLogo from './bluebeom.png'

export function MoveBox08() {
  const { mouseClick, moveTitleToDown, moveTitleToLeft, moveTitleToRight, moveTitleToUp } = useMovePosition();
  const angle = (mouseClick.x + mouseClick.y) % 360; // x와 y 값을 조합하여 각도 계산

  return (
    <div style={{position: 'relative', height: '200px'}}>
      <img src={exampleLogo} alt="" style={{
          position: "absolute",
          left: `${mouseClick.x}px`,
          bottom: `${mouseClick.y}px`,
          width: "100px",
          height: "100px",
          cursor: "pointer",
          transition: "all 0.5s ease-in-out",
          transform: `rotate(${angle}deg)`,
        }}/>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={moveTitleToRight}>
          Move Title To Right
        </button>
        <button onClick={moveTitleToDown}>
          Move Title To Down
        </button>
        <button onClick={moveTitleToLeft}>
          Move Title To Left
        </button>
        <button onClick={moveTitleToUp}>
          Move Title To Up
        </button>
      </div>
    </div>
  );
}
