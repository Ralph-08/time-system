import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h2 className="nav__header">Time Manager</h2>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            Dashboard
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/hours" className="nav__link">
            My Hours
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
