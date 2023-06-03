import { Menu } from "./menu";

import styles from "./style.module.less";
import { pages } from "@/router";

function HomeSiderbarBody() {
  return (
    <div className={styles["home-siderbar-body"]}>
      {pages.map((item) => (
        <Menu title={item.name} key={item.name}>
          {item.children?.map((item) => (
            <Menu.Item key={item.name}>{item.name}</Menu.Item>
          ))}
        </Menu>
      ))}
    </div>
  );
}

export default HomeSiderbarBody;
