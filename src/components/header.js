import { LOGO_CDN_URL } from "../Constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";
import UserContext from "../../util/UserContext";
import {useSelector} from "react-redux";
import Logo from "../../assests/images/Logo.png"



const Title = function () {
  return (
    <Link to="/">
      <img data-testid="logo" className="w-24 p-2" src={Logo} />
      {/* <img data-testid="logo" className="w-24 p-2" src={`${LOGO_CDN_URL}`} /> */}
    </Link>
  );
};

const Header = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(true);
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  const itemsCount = useSelector( (store) => { return store.cart.items.length});

  return (
    <div className="flex justify-between m-5 bg-purple-300 border border-purple-800 rounded-md">
      <Title />
      <div>
        <ul className="flex py-6">
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link data-testid="cart" to="/cart">Cart {[itemsCount]}</Link>
          </li>
          <li className="p-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-2">
            <Link to="/trying">Trying...</Link>
          </li>
        </ul>
      </div>
      {isOnline ? <h1 data-testid="online-status" className="py-8">{user.name}🟢</h1> : <h1 className="py-8">{user.name}🔴</h1>}
      {authenticatedUser ? (
        <button className="border border-black p-2 m-2 rounded-xl"
          onClick={() => {
            setAuthenticatedUser(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button className="border border-black p-2 m-2 rounded-xl"
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
