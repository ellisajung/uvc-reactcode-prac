import '@styles/styles.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import UserIndex from '@pages/user';
import SignIndex from '@pages/sign';
import HookIndex from '@pages/hook';
import Home from '@pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<UserIndex />} />
          <Route path="/sign" element={<SignIndex />} />
          <Route path="/hook" element={<HookIndex />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);