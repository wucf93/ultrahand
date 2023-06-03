import styles from "./style.module.less";

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
        <img src="/logo.png" height={70} width={70} />
      </div>
    </div>
  );
}

export default HomeSiderbarHeader;
