import '@styles/styles.css';


import { createRoot } from 'react-dom/client';
import { Bread } from './components/bread';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import SignIndex from '@pages/sign/index'
import UserIndex from '@pages/user/index'
import { Event1, Event2, Event3 } from '@components/event';
import * as Event from '@components/event2';
import { Counter } from './components/counter';
import { Context, MyComponent } from './components/myComponent';
import { RefComponent } from './components/refComponent';
import { MemoComponent } from './components/memoComponent';
import { ParentComponent } from './components/callbackComponent';
import { MouseTracker } from './components/mouse';
import { InputComponent } from './components/input';

function App() {
  const breadName = '소보로빵';
  return (
    <>
      <h1>Hello from React!</h1>
      <Bread bread='모카빵' />
      <p>{breadName}</p>
      <Header />
      <Footer />
      <SignIndex />
      <UserIndex />
      <Event1 />
      <Event2 />
      <Event3 />
      <Event.Event21 />
      <Event.Event22 />
      <Event.Event23 />
      <Counter />
      <Context>
        <MyComponent />
      </Context>
      <RefComponent />
      <MemoComponent a={1} b={2}/>
      <ParentComponent />
      <MouseTracker />
      <InputComponent />
    </>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);