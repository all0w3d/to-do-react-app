import { BrowserRouter as Router, Link } from "react-router-dom";
import "./default.scss";
import styles from "./app.module.scss";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Body from "./components/body/body";

function App() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.body}>
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
