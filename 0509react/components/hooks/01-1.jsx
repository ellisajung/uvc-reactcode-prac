import { useMouseClick } from './01';

export function MouseClick01() {
  const { x, y } = useMouseClick();

  return (
    <div>
      마우스 클릭: ({x}, {y})
    </div>
  )
}