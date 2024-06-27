import '@styles/styles.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '@pages/main.jsx'
import StateIndex from '@pages/state/index.jsx'

import { Header } from '@components/header';
import { Footer } from '@components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/state" element={<StateIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);