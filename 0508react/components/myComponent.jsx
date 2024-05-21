import React from 'react';
import { useContext } from 'react'

const MyContext = React.createContext();

export function MyComponent() {
  const value = useContext(MyContext);
  return (
    <p>{value}</p>
  )
}

export function Context({ children }) {
  return (
    <MyContext.Provider value='소금빵'>
      { children }
    </MyContext.Provider>
  )
}
