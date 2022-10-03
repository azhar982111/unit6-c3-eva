import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { useContext } from "react";

const links = [
  {
    path: "/",
    title: "HOME"
  },
  {
    path: "/cart",
    title: "CART"
  },
  {
    path: "/login",
    title: "LOGIN"
  }
];

function Navbar() {

  const { token, isAuth} = useContext(AuthContext);

  const defaultStyle = {
    textDecoration: "none",
    color: "black"
  };

  const activeStyle = {
    textDecoration: "none",
    color: "green"
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "left",
        justifyContent: "space-around",
        width: "100%",
        margin: "auto",
        background: "#cecece",
        padding: "20px"
      }}
    >
      <p>{isAuth?`Token: ${token}`:""}</p>
      {links.map((link) => (

        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
