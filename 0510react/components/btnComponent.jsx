import { useContext } from 'react'
import { BtnContext } from './btnContext'

export function BtnComponent() {
  const { btnStyle } = useContext(BtnContext)

  const style = {
    default: { color: 'white', backgroundColor: 'blue' },      // 기본 파란색 버튼
    success: { color: 'white', backgroundColor: 'green' },     // 성공한 초록색 버튼
    error: { color: 'white', backgroundColor: 'red' },         // 에러나는 빨간색 버튼
    disabled: { color: 'gray', backgroundColor: 'lightgray' }, // 비활성화된 버튼
  }

  return (
    <button style={style[btnStyle]} disabled={btnStyle === 'disabled'}>스타일이 적용되는 버튼</button>
  )
}