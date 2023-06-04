import React, { FC, ReactComponentElement, Fragment, useMemo } from "react";
import { Divider } from "antd";
import { To } from "react-router-dom";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "../base";

export interface CardItemProps extends BaseProps {
  to?: To;
  active?: boolean;
  children?: React.ReactNode;
}

const CardItem: FC<CardItemProps> = (props) => {
  return (
    <div
      className={cx(styles["fedh-card-item"], props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export interface CardProps extends BaseProps {
  title?: React.ReactNode;
  children:
    | ReactComponentElement<typeof CardItem>
    | Array<ReactComponentElement<typeof CardItem>>;
}

export interface CardPropsWrapper extends FC<CardProps> {
  Item: typeof CardItem;
}

export const Card: CardPropsWrapper = (props) => {
  const children = useMemo(() => {
    const childrens = Array.isArray(props.children)
      ? props.children
      : [props.children];
    return childrens.map((element, index) => (
      <Fragment key={index}>
        {element}{" "}
        {index < childrens.length - 1 && (
          <Divider className={styles["fedh-card-divider"]} />
        )}
      </Fragment>
    ));
  }, [props.children]);

  return (
    <div
      className={cx(styles["fedh-card"], props.className)}
      style={props.style}
    >
      {props.title && (
        <div className={styles["fedh-card-title"]}>{props.title}</div>
      )}
      <div className={styles["fedh-card-body"]}>{children}</div>
    </div>
  );
};

Card["Item"] = CardItem;
