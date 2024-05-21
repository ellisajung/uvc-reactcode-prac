import { BtnProvider } from "../components/btnContext";
import { BtnControl } from "../components/btnContol";

export default function Index() {
  return (
    <>
      context page
      <BtnProvider>
        <BtnControl />
      </BtnProvider>
    </>
  )
}