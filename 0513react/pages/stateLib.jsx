import { StateJotai } from "../components/state/jotai";
import { StateMobX } from "../components/state/mobx";
import { StateRedux } from "../components/state/redux";
import { StateZustand } from "../components/state/zustand";

export function StateLib() {
  return (
    <>
      <h2>Redux</h2>
      <StateRedux />
      <h2>Zustand</h2>
      <StateZustand />
      <h2>Jotai</h2>
      <StateJotai />
      <h2>MobX</h2>
      <StateMobX />
    </>
  )
}