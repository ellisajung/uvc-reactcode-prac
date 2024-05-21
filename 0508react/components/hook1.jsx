import { useState, useEffect } from 'react'

export function useHook1() {
  const [change, setChange] = useState('')
  useEffect(() => {
    const handleChange = (e) => {
      setChange('Hi')
    }
    globalThis.addEventListener('click', handleChange)
  }, [])
  return change
}