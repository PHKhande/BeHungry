import { LOGO_CDN_URL } from "../Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";

const Title = function () {
  return (
    <Link to="/">
      <img src={`${LOGO_CDN_URL}`} />
    </Link>
  );
};

const Header = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(true);

  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? <h1>🟢</h1> : <h1>🔴</h1>}
      {authenticatedUser ? (
        <button
          onClick={() => {
            setAuthenticatedUser(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setAuthenticatedUser(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
