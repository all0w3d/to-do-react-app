import React from "react";
import styles from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>All</li>
        <li>Today</li>
        <li>Upcoming</li>
        <li>Filters</li>
        <li>Deleted</li>
        <li>Junked</li>
      </ul>
    </div>
  );
};

export default Sidebar;
