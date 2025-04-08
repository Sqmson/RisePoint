import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">RISEPOINT</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;