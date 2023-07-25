import { LOGO_CDN_URL } from "./constants";

const Title = function () {
  return (
    <a href="/">
      <img src= {`${LOGO_CDN_URL}`}/>
    </a>
  );
};

const Header = () => {
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
    </div>
  );
};

export default Header;