import React, { FC } from "react";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "../base";

export interface ButtonProps extends BaseProps {
  border?: boolean;
  shadow?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={cx(
        styles["fedh-button"],
        {
          [styles["border"]]: props.border,
          [styles["shadow"]]: props.shadow,
        },
        props.className
      )}
      style={props.style}
      onClick={props.onClick}
    >
      {props.icon && (
        <div className={styles["fedh-button-icon"]}>{props.icon}</div>
      )}
      {props.children && <div>{props.children}</div>}
    </button>
  );
};
