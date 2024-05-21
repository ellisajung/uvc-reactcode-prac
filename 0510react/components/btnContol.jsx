import { useContext } from 'react'
import { BtnComponent } from "./btnComponent";
import { BtnContext } from './btnContext'

export function BtnControl() {
  const { changeStyle } = useContext(BtnContext)

  return (
    <>
      <BtnComponent />
      <button onClick={() => changeStyle('default')}>기본 파란색 버튼</button>
      <button onClick={() => changeStyle('success')}>성공한 초록색 버튼</button>
      <button onClick={() => changeStyle('error')}>에러나는 빨간색 버튼</button>
      <button onClick={() => changeStyle('disabled')}>비활성화된 버튼</button>
    </>
  )
}