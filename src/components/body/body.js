import React from "react";
import styles from "./body.module.scss";

const Body = () => {
  return (
    <div className={styles.wrapper}>
      <h2>List</h2>
      <p>
        <input type="checkbox" name="" id="" />
        <span>Brainstorm Ideas</span>
      </p>
    </div>
  );
};

export default Body;
