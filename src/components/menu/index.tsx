import { FC, Key, ReactNode } from "react";
import { Col, Empty, Row } from "antd";
import { Avatar } from "../avatar";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "..";

interface MenuItemProps extends BaseProps {
  key: Key;
  name: string;
  value?: unknown;
  icon?: ReactNode;
}

interface MenuProps extends BaseProps {
  data?: Array<MenuItemProps>;
  selectKey?: MenuItemProps["key"];
  onSelect?: (key: MenuItemProps["key"], menuItem: MenuItemProps) => void;
}

export const Menu: FC<MenuProps> = (props) => {
  return (
    <div className={styles["fedh-menu"]}>
      {props.data?.map((menuItem) => (
        <Row
          align="middle"
          key={menuItem.key}
          style={props.style}
          className={cx(styles["fedh-menu-item"], props.className, {
            [styles["active"]]: menuItem.key === props.selectKey,
          })}
          onClick={() => props.onSelect?.(menuItem.key, menuItem)}
        >
          <Col className={styles["fedh-menu-item--icon"]}>
            <Avatar>{menuItem.icon || menuItem.name}</Avatar>
          </Col>
          <Col>{menuItem.name}</Col>
        </Row>
      ))}

      {!props.data?.length && (
        <Empty
          className={styles["fedh-menu-empty"]}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    </div>
  );
};
