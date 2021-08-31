import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./default.scss";
import styles from "./app.module.scss";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Body from "./components/body/body";
import Statistic from "./components/Statistic/Statistic";

function App() {
  return (
    <Router>
      <div className={styles.layout}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.body}>
          <Switch>
            <Route path="/" component={Body} exact />
            <Route path="/statistic" component={Statistic} />
            <Route path="/notifications" />
            <Route path="/settings" />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
