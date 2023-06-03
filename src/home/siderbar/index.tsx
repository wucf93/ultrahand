import HomeSiderbarHeader from "./header";
import HomeSiderbarBody from "./body";
import HomeSiderbarTail from "./tail";

import styles from "./style.module.less";

function HomeSidebar() {
  return (
    <div className={styles["home-siderbar"]}>
      <HomeSiderbarHeader />
      <HomeSiderbarBody />
      <HomeSiderbarTail />
    </div>
  );
}

export default HomeSidebar;
