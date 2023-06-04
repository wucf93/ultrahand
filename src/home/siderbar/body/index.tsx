import { useLocation } from "react-router-dom";
import { Menu } from "./menu";
import { pages } from "@/router";
import styles from "./style.module.less";

function HomeSiderbarBody() {
  const { pathname } = useLocation();

  return (
    <div className={styles["home-siderbar-body"]}>
      {pages.map((item) => (
        <Menu title={item.name} key={item.id}>
          {item.children?.map((item) => (
            <Menu.Item
              key={item.id}
              to={item.path}
              active={item.path === pathname}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      ))}
    </div>
  );
}

export default HomeSiderbarBody;
