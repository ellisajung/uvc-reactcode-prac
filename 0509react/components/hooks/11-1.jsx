import { useMousePosition } from './11';

export function MouseTracker11() {
  const { x, y } = useMousePosition();

  return (
    <div>
      마우스 위치: ({x}, {y})
    </div>
  );
}