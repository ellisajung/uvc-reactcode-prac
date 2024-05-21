import { useHook } from "./05"

export function BoxComponent05() {
  const hook = useHook();
  return (
    <p>
      마우스 위치: ({hook.x}, {hook.y})
    </p>
  )
}