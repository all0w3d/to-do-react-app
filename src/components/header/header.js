import React from "react";
import styles from "./header.module.scss";
import { ReactComponent as HomeButton } from "../../assets/home.svg";
import { ReactComponent as PlusButton } from "../../assets/plus.svg";
import Search from "./search/search";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/">
        <HomeButton />
      </NavLink>
      <div>
        <Search />
      </div>

      <button className={styles.plusHover}>
        <PlusButton />
      </button>

      <NavLink to="/statistic">Statistic</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
};

export default Header;
