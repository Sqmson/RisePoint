import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/programs">Programs</NavLink></li>
        <li><NavLink to="/fundraising">Fundraising</NavLink></li>
        <li><NavLink to="/get-involved">Get Involved</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/impact">Impact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation; 