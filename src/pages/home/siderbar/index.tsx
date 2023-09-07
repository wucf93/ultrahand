import { useMemo } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import { PageObject, isPageObject, pages } from "@/router";
import { GithubFilled, SettingFilled } from "@ant-design/icons";
import Tool from "./tool";
import styles from "./style.module.less";

function HomeSidebar() {
  const [, tool] = useMatches();
  const navigate = useNavigate();
  const tools = useMemo(
    () => pages.filter((page) => isPageObject(page)) as PageObject[],
    []
  );

  return (
    <div className={styles["home-siderbar"]}>
      <div>
        {tools.map((page) => (
          <Tool
            key={page.id}
            icon={page.icon}
            tooltip={page.name}
            active={tool?.id === page.id}
            onClick={() => page.path && navigate(page.path)}
          />
        ))}
      </div>

      <div>
        <Tool
          icon={<GithubFilled />}
          onClick={() => window.open("https://github.com/wucf93/ultrahand")}
        />
        <Tool icon={<SettingFilled />} tooltip="设置" />
      </div>
    </div>
  );
}

export default HomeSidebar;
