import { createContext, useState } from 'react'

export const BtnContext = createContext();

export function BtnProvider({ children }) {
  const [btnStyle, setBtnStyle] = useState('default')

  const changeStyle = (style) => {
    setBtnStyle(style)
  }
  return (
    <>
      <BtnContext.Provider value={{ btnStyle, changeStyle }}>
        {children}
      </BtnContext.Provider>
    </>
  )
}