import { useMemo } from "react";
import { useMatches } from "react-router-dom";
import { PageObject, isPageObject, pages } from "@/router";
import { GithubFilled, SettingFilled } from "@ant-design/icons";
import Tool from "./tool";
import styles from "./style.module.less";

function HomeSidebar() {
  const [, tool] = useMatches();
  const tools = useMemo(
    () => pages.filter((page) => isPageObject(page)) as PageObject[],
    []
  );

  return (
    <div className={styles["home-siderbar"]}>
      <div>
        {tools.map((page) => (
          <Tool
            active={tool?.id === page.id}
            icon={page.icon}
            tooltip={page.name}
            key={page.id}
          />
        ))}
      </div>

      <div>
        <Tool icon={<GithubFilled />} onClick={() => window.open()} />
        <Tool icon={<SettingFilled />} tooltip="设置" />
      </div>
    </div>
  );
}

export default HomeSidebar;
