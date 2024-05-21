import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <Link to="/">메인페이지로 이동</Link>
      <Link to="/state">state 페이지로 이동</Link>
    </nav>
  )
}