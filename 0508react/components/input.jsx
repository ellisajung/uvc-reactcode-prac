import { useHook1 } from './hook1'

export function InputComponent() {
  const value = useHook1()
  return (
    <div className="box">
      <p onClick={() => value}>도큐먼트를 클릭하면 {value}</p>
    </div>
  )
}