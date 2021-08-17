import React from "react";
import styles from './header.module.scss';
import {ReactComponent as HomeButton} from '../../assets/home.svg'
import {ReactComponent as PlusButton} from '../../assets/plus.svg'
import Search from "./search/search";


const Header = () => {
  return (
    <div className={styles.wrapper}>
      <button><HomeButton/></button>
      <div><Search/></div>
      <div></div>
      <button className={styles.plusHover}><PlusButton/></button>
      <div>Statistic</div>
      <div>Notifications</div>
      <div>Settings</div>
    </div>
  );
};

export default Header;
