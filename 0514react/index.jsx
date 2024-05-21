import '@styles/styles.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainIndex from '@pages/main.jsx'
import ThreeIndex from '@pages/three.jsx'
import FactoryIndex from '@pages/factory.jsx'
import { Header } from './components/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainIndex />} />
          <Route path="/three" element={<ThreeIndex />} />
          <Route path="/factory" element={<FactoryIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);