import { useKeyColorChange } from "./06"

export function Box06({ colors }) {
  const color = useKeyColorChange(colors);
  return (
    <>
      <p>press key</p>
      <div className={"box06 box06-" + color}></div>
    </>
  )
}