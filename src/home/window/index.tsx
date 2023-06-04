import HomeWindowBody from "./body";
import HomeWindowHeader from "./header";

import styles from "./style.module.less";

function HomeWindow() {
  return (
    <div className={styles["home-window"]}>
      <HomeWindowHeader />
      <HomeWindowBody />
    </div>
  );
}

export default HomeWindow;
