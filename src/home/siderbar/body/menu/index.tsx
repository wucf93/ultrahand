import React, { FC } from "react";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "@/components";

export interface MenuItemProps extends BaseProps {
  children?: React.ReactNode;
}

export interface MenuItemProps extends BaseProps {
  children?: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <div
      className={cx(styles["home-siderbar-menu-item"], props.className)}
      style={props.style}
    >
      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export interface MenuProps extends BaseProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export interface MenuPropsWrapper extends FC<MenuProps> {
  Item: typeof MenuItem;
}

export const Menu: MenuPropsWrapper = (props) => {
  return (
    <div
      className={cx(styles["home-siderbar-menu"], props.className)}
      style={props.style}
    >
      {props.title && (
        <div className={styles["home-siderbar-menu-title"]}>{props.title}</div>
      )}
      {props.children && <div>{props.children}</div>}
    </div>
  );
};

Menu["Item"] = MenuItem;
