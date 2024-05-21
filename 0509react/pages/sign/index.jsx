import SendState from "@components/state/sendState";
import ObjectState from "@components/state/objectState";
import ArrayFilterState from "@components/state/arrayFilterState";
import ArraySliceState from "@components/state/arraySliceState";

export default function Index() {
  return (
    <div className="sign">
      <p>sign page</p>
      <SendState />
      <ObjectState />
      <ArrayFilterState />
      <ArraySliceState />
    </div>
  )
}