import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector} from "react-redux";


const Header = () => {
    const [inOutBtn, setInOutBtn] = useState("Login");

    const inOut = () => {
      inOutBtn === "Login" ? setInOutBtn("Logout") : setInOutBtn("Login");
    }

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src= {LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/" className="linkBtn">Home</Link></li>
            <li><Link to="/about" className="linkBtn">About Us</Link></li>
            <li><Link to="/contact" className="linkBtn">Contact Us</Link></li>
            <li><Link to="/cart" className="linkBtn font-bold">Cart- ({cartItems.length} items)</Link></li>
            <li>{onlineStatus == true ? "🟢":"🔴"}</li>
            <button className="inout" onClick={inOut}>{inOutBtn}</button>
          </ul>
        </div>
      </div>
    );
};

export default Header;