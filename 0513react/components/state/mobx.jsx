import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

// MobX 설정과 스토어 생성
// createCounterStore 함수는 카운터 스토어를 생성합니다. 스토어는 count라는 상태를 가지고 있고, increment라는 메소드를 통해 이 상태를 변경할 수 있습니다.
function createCounterStore() {
  const store = {
    count: 0,
    // increment 메소드는 this.count++를 통해 count 값을 증가시킵니다.
    // this 바인딩이 필요하므로 increment 함수에 this를 바인딩합니다.
    // 이렇게해야, 이벤트 핸들러에서 함수를 호출할 때 this가 올바른 컨텍스트를 가리키도록 보장합니다.
    increment() {
      this.count++;
    }
  };
  store.increment = store.increment.bind(store);
  // makeAutoObservable 함수는 이 객체를 MobX 스토어로 변환하여, count의 변화를 자동으로 감지하고 관련 컴포넌트를 업데이트하게 합니다.
  makeAutoObservable(store);
  return store;
}

const counterStore = createCounterStore();

// MobX 스토어를 사용하는 React 컴포넌트
// CounterComponent 컴포넌트는 observer 함수로 감싸져 있어서, MobX 스토어의 상태(count)가 변경될 때마다 컴포넌트가 자동으로 리렌더링 됩니다.
const CounterComponent = observer(() => {
  // useState를 사용하여 로컬 변수 localCounterStore에 스토어 인스턴스를 저장합니다.
  // 컴포넌트의 라이프사이클 동안 스토어의 참조를 유지하도록 합니다.
  const [localCounterStore] = useState(counterStore);

  return (
    <div>
      <b>MobX</b>
      <p>{localCounterStore.count}</p>
      {/* 버튼 클릭 이벤트 핸들러에서는 localCounterStore.increment()를 호출하여 카운터 값을 증가시킵니다. */}
      <button onClick={() => localCounterStore.increment()}>Increase</button>
    </div>
  );
});

// 컴포넌트를 반환하는 상위 컴포넌트
// StateMobX 함수는 최상위 컴포넌트로서, CounterComponent를 렌더링합니다.
// 이 구조는 컴포넌트를 모듈화하여 관리하기 쉽게 만듭니다.
export function StateMobX() {
  return <CounterComponent />;
}
