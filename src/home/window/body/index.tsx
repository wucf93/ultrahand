import { Outlet } from "react-router-dom";

import styles from "./style.module.less";

function HomeWindowBody() {
  return (
    <div className={styles["home-window-body"]}>
      <Outlet />
    </div>
  );
}

export default HomeWindowBody;
