import "@styles/styles.css";
import '@styles/styles2.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

import { Main } from '@pages/main.jsx'
import { StateLib } from '@pages/stateLib';
import { TestPage } from '@pages/test';
import { Event } from './pages/event';
import { StylePage } from "./pages/style";

export const UserProfile = () => {
  // useParams 훅을 사용하여 경로 변수에 접근
  const params = useParams();
  return <div>User Profile for ID: {params.userId}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>메인페이지로 이동</NavLink>
        <NavLink to="/state-library" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>state library 페이지로 이동</NavLink>
        <NavLink to="/test" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>test 페이지로 이동</NavLink>
        <Link to="/users/1" element={<UserProfile />}>user1</Link>
        <Link to="/users/2" element={<UserProfile />}>user2</Link>
        <Link to="/event" element={<Event />}>Event 페이지로 이동</Link>
        <Link to="/style" element={<StylePage />}>Style 페이지로 이동</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/state-library" element={<StateLib />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/style" element={<StylePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);