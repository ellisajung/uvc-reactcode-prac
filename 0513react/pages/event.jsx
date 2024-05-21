import { DragDropEvent } from "../components/event/drag"
import { InputEvent } from "../components/event/input"
import { KeyboardEvents } from "../components/event/keyboard"
import { MouseEvents } from "../components/event/mouse"
import { TouchEvent } from "../components/event/touch"
import { UIEvent } from "../components/event/ui"

export const Event = () => {
  return (
    <>
      event page
      <InputEvent />
      <MouseEvents />
      <KeyboardEvents />
      <UIEvent />
      <TouchEvent />
      <DragDropEvent />
    </>
  )
}