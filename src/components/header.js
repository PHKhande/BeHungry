import { LOGO_CDN_URL } from "./constants";
import { useState } from "react";


const Title = function () {
  return (
    <a href="/">
      <img src= {`${LOGO_CDN_URL}`}/>
    </a>
  );
};

const Header = () => {
const [authenticatedUser, setAuthenticatedUser] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

      {
        authenticatedUser ? <button onClick={() => {setAuthenticatedUser(false)}}> Logout </button> : <button onClick={() => {setAuthenticatedUser(true)}} > Login </button>
      }
    </div>
  );
};

export default Header;