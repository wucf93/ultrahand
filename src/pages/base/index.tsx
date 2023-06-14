import { ReactNode, useMemo } from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";
import { isPageObject, PageObject, pages } from "@/router";
import { Col, Row, Avatar } from "antd";
import cx from "classnames";
import styles from "./style.module.less";

const Sections = () => {
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
      toolInfo?.children?.filter((page) =>
        isPageObject(page)
      ) as Array<PageObject>,
    [toolInfo?.children]
  );

  return (
    <div className={styles["page-base-section"]}>
      {/* 标题 */}
      {toolInfo?.name && (
        <div className={styles["page-base-section--title"]}>
          {toolInfo?.name}
        </div>
      )}
      <div className={styles["page-base-section--body"]}>
        {sections.map((page) => (
          <Row
            key={page.id}
            gutter={8}
            className={cx(styles["page-base-section--item"], {
              [styles["active"]]: page.id === section.id,
            })}
            align="middle"
            onClick={() => page.path && navigate(page.path)}
          >
            <Col>
              <Avatar>{page.icon}</Avatar>
            </Col>
            <Col>{page.name}</Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export function Component() {
  return (
    <div className={styles["page-base"]}>
      <Sections></Sections>
      <div className={styles["page-base-outlet"]}>
        <Outlet />
      </div>
    </div>
  );
}
