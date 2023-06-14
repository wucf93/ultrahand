import { Button } from "@/components";
import { SettingOutlined, GithubOutlined } from "@ant-design/icons";

import styles from "./style.module.less";

function HomeSiderbarTail() {
  return (
    <div className={styles["home-siderbar-tail"]}>
      <div className={styles["home-siderbar-tail-actions"]}>
        <Button
          shadow
          icon={<SettingOutlined />}
          className={styles["home-siderbar-tail-actions--item"]}
        />
        <Button
          shadow
          icon={<GithubOutlined />}
          className={styles["home-siderbar-tail-actions--item"]}
          onClick={() =>
            window.open("https://github.com/wucf93/frontend-development-helper")
          }
        />
      </div>
    </div>
  );
}

export default HomeSiderbarTail;
