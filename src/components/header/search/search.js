import React from "react";
import styles from "./search.module.scss";
import { ReactComponent as SearchLogo } from "../../../assets/magnifying-glass.svg";


const Search = () => {
  return (
    <div className={styles.searchArea}>
      <SearchLogo className={styles.logo} />
      <input className={styles.search} type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
