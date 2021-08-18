import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { ReactComponent as ArrowLogo } from "../../assets/arrow.svg";
import { ReactComponent as PlusLogo } from "../../assets/plus.svg";

const Sidebar = () => {
  const [catArrow, setCatArrow] = useState();

  return (
    <div>
      <ul className={styles.list}>
        <li>
          <p>All</p>
        </li>
        <li>
          <p>Today</p>
        </li>
        <li>
          <p>Deleted</p>
        </li>
        <li>
          <h2
            className={catArrow}
            onClick={() => setCatArrow(catArrow ? null : styles.rotated)}
          >
            <ArrowLogo />
            Projects
          </h2>
          {catArrow ? (
            <p>
              <PlusLogo className={styles.plus} /> Add New Project
            </p>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
