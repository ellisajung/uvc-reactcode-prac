import StatusState from "@components/statusState";
import { ChooseState } from "@components/chooseState";
import { ChooseInputState } from "@components/chooseInputState";
import { Reducer } from "@components/reducer/reducer";
import TaskApp from "@components/reducerContext/app";

export default function Index() {
  return (
    <div className="state-page">
      <p>state page</p>
      <StatusState />
      <ChooseState />
      <ChooseInputState />
      <Reducer />
      <TaskApp />
    </div>
  )
}
