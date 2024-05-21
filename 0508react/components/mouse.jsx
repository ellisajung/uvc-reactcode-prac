import { useMousePosition } from './hook';

export function MouseTracker() {
  const { x, y } = useMousePosition();

  return (
    <div>
      {`마우스 위치: (${x}, ${y})`}
    </div>
  );
}