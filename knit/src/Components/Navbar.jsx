import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { AuthContext } from "../context/AuthProvider";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import img1 from '../assets/logo1.png';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      <a href="#" className="logo">
        <img className="logo" src={img1} alt="" />
        
        
      </a>
      <ul className="navigation">
        <li>
          <Link to="/" className="dt">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="dt">
            About
          </Link>
        </li>
        <li>
        <Link to="/products" className="dt">
            Products
          </Link>
        </li>
        <li>
        <Link to="/special" className="dt">
            Special
          </Link>
        </li>
        <li>
        <Link to="/contact" className="dt">
            Contact
          </Link>
        </li>
        <li>
          <div>
            <div>
              {user ? (
                <button className="logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt className="logout-icon" />
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="login">
                    <AiOutlineLogin />
                    Login
                  </Link>
                  <Link to="/register" className="regi">
                    <AiOutlineUserAdd />
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </li>
        {user && (
          <div className="user-container">
            <FaUserCircle className="user-icon" />
            <span className="user-info">{user.email}</span>
          </div>
        )}
      </ul>
    </header>
  );
}
