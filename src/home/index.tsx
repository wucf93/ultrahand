import HomeSidebar from "./siderbar";
import HomeWindow from "./window";

import styles from "./style.module.less";

function Home() {
  return (
    <div className={styles["home-container"]}>
      <HomeSidebar />
      <HomeWindow />
    </div>
  );
}

export default Home;
