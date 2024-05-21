import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
// 액션
// createSlice는 Redux state의 일부분을 관리하는 리듀서와 관련 액션 생성자들을 쉽게 생성할 수 있게 합니다. 여기서 counterSlice는 카운터 기능을 담당하는 슬라이스입니다.
const counterSlice = createSlice({
  // increment라는 리듀서 함수를 정의합니다.
  name: 'counter',
  // createSlice 슬라이스는 initialState로 { count: 0 }을 가집니다.
  initialState: { count: 0 },
  // counterSlice 함수는 상태의 count 값을 1 증가시킵니다.
  reducers: {
    increment(state) {
      state.count += 1;
    }
  }
});

// 스토어
// configureStore는 Redux 스토어를 설정합니다.
// store 함수는 슬라이스에서 생성된 리듀서를 포함하며, counterSlice.reducer가 사용됩니다.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export function StateRedux() {
  return (
    // Provider 컴포넌트는 React 컴포넌트 트리에 Redux 스토어를 제공합니다. 하위 컴포넌트에서 스토어에 접근할 수 있습니다.
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

// CounterComponent에서는 useSelector를 사용하여 Redux 스토어의 count 상태를 가져옵니다. useDispatch는 Redux 스토어의 dispatch 함수를 사용할 수 있게 합니다.
function CounterComponent() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  // handleClick 함수는 increment 액션을 발생시켜 카운터의 값을 증가시킵니다.
  const handleClick = () => {
    dispatch(counterSlice.actions.increment())
  }
  return (
    <div>
      <b>Redux</b>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}