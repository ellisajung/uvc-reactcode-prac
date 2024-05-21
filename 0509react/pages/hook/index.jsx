import { MouseClick01 } from "../../components/hooks/01-1";
import { Auth02 } from "../../components/hooks/02-1";
import { MouseOver03 } from "../../components/hooks/03";
import { KeyboardTracker04 } from "../../components/hooks/04-1";
import { BoxComponent05 } from "../../components/hooks/05-1";
import { Box06 } from "../../components/hooks/06-1";
import { TestResult07 } from "../../components/hooks/07-1";
import { MoveBox08 } from "../../components/hooks/08";
import { SignUpForm09 } from "../../components/hooks/09-1";
import { MouseTracker10 } from "../../components/hooks/10";
import { MouseTracker11 } from "../../components/hooks/11-1";

export default function Index() {
  return (
    <>
      <h2>01</h2>
      <MouseClick01 />
      <h2>02</h2>
      <Auth02 />
      <h2>03</h2>
      <MouseOver03 />
      <h2>04</h2>
      <KeyboardTracker04 />
      <h2>05</h2>
      <BoxComponent05 />
      <h2>06</h2>
      <Box06 colors={['yellow', 'red', 'skyblue', 'green']}/>
      <h2>07</h2>
      <TestResult07 />
      <h2>08</h2>
      <MoveBox08 />
      <h2>09</h2>
      <SignUpForm09 />
      <h2>10</h2>
      <MouseTracker10 />
      <h2>11</h2>
      <MouseTracker11 />
    </>
  )
}