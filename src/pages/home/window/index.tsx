import { Outlet } from "react-router-dom";
import styles from "./style.module.less";

function HomeWindow() {
  return (
    <div className={styles["home-window"]}>
      <Outlet />
    </div>
  );
}

export default HomeWindow;
