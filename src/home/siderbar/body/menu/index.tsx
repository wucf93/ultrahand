import React, { FC } from "react";
import { To, useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "@/components";

export interface MenuItemProps extends BaseProps {
  to?: To;
  active?: boolean;
  children?: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={cx(
        styles["home-siderbar-menu-item"],
        { [styles["active"]]: props.active },
        props.className
      )}
      style={props.style}
      onClick={() => props.to && navigate(props.to)}
    >
      {props.children}
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
