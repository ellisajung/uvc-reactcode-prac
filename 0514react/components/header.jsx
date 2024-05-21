import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Main 페이지</Link>
        <Link to="/three">Threejs 페이지</Link>
        <Link to="/factory">Factory 페이지</Link>
      </nav>
    </header>
  )
}