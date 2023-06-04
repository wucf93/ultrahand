import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { pageRoutes } from "@/router";
import styles from "./style.module.less";

const HomeWindowHeader = () => {
  const { pathname } = useLocation();

  const currentRoute = useMemo(
    () => pageRoutes.find((item) => item.path === pathname),
    [pathname]
  );

  return (
    <div className={styles["home-window-header"]}>
      <div>
        <div className={styles["home-window-header-title"]}>
          {currentRoute?.name}
        </div>
      </div>
    </div>
  );
};

export default HomeWindowHeader;
