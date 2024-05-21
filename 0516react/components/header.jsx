import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">메인페이지</Link>
        <Link to="/video">비디오 페이지</Link>
        <Link to="/http">http 페이지</Link>
        <Link to="/socket">socket 페이지</Link>
      </nav>
    </header>
  );
};
