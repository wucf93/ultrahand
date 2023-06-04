import Logo from "@/assets/logo.png";
import styles from "./style.module.less";

console.log(Logo)

function HomeSiderbarHeader() {
  return (
    <div className={styles["home-siderbar-header"]}>
      <div>
        <div className={styles["home-siderbar-header-title"]}>FEDH</div>
        <div className={styles["home-siderbar-header-sub-title"]}>
          前端开发助手
        </div>
      </div>
      <div className={styles["home-siderbar-header-logo"]}>
        <img src={Logo} height={48} width={48} />
      </div>
    </div>
  );
}

export default HomeSiderbarHeader;
