import "./NavBar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const NavBar = () => {
  const auth = firebase.auth();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    auth.signOut();
    setTimeout(() => {
      navigate("/sign-in");
    }, 0);
  };

  return (
    <nav className="nav">
      <h2 className="nav__header">Time Manager</h2>
      {user && (
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
          <li className="nav__item">
            <p className="nav__p" onClick={handleSignOut}>
              Sign Out
            </p>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
