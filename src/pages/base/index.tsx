import { useMemo } from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";
import { isPageObject, PageObject, pages } from "@/router";
import { Menu, PageLayout } from "@/components";
import styles from "./style.module.less";

export function Component() {
  const [, tool, section] = useMatches();
  const navigate = useNavigate();

  const toolInfo = useMemo(
    () =>
      pages?.find(
        (page) => page.id === tool?.id && isPageObject(page)
      ) as PageObject,
    [tool?.id]
  );

  const sections = useMemo(
    () =>
      (
        toolInfo?.children?.filter((page) =>
          isPageObject(page)
        ) as Array<PageObject>
      )?.map((page) => ({
        key: page.id,
        name: page.name,
        value: page.path,
        icon: page.icon,
      })),
    [toolInfo?.children]
  );

  return (
    <PageLayout
      title="基础工具"
      className={styles["page-base"]}
      sider={
        <Menu
          data={sections}
          selectKey={section.id}
          onSelect={(_, menu) =>
            typeof menu?.value === "string" && navigate(menu.value)
          }
        />
      }
    >
      <div className={styles["page-base-outlet"]}>
        <Outlet />
      </div>
    </PageLayout>
  );
}
