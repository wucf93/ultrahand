import { FC, ReactNode } from "react";
import { Layout } from "antd";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "..";

interface PageLayoutProps extends BaseProps {
  title?: ReactNode;
  sider?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
  return (
    <Layout
      style={props.style}
      className={cx(styles["fedh-page-layout"], props.className)}
    >
      {props.title && (
        <Layout.Header className={styles["fedh-page-layout-header"]}>
          {props.title}
        </Layout.Header>
      )}

      <Layout className={styles["fedh-page-layout-wrapper"]}>
        {props.sider && (
          <Layout.Sider
            className={styles["fedh-page-layout-sider"]}
            theme="light"
          >
            {props.sider}
          </Layout.Sider>
        )}
        <Layout.Content className={styles["fedh-page-layout-content"]}>
          {props.children}
        </Layout.Content>
      </Layout>

      {props.footer && (
        <Layout.Footer className={styles["fedh-page-layout-footer"]}>
          {props.footer}
        </Layout.Footer>
      )}
    </Layout>
  );
};
