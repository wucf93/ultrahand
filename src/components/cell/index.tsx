import React, { FC } from "react";
import { Col, Row } from "antd";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "../base";

export interface CellElementProps {
  title: React.ReactNode;
  children: React.ReactNode;
  extra?: React.ReactNode;
}

export interface CellProps extends BaseProps {
  leftNode: CellElementProps;
  actionNode: React.ReactNode;
  rightNode: CellElementProps;
}

export const Cell: FC<CellProps> = (props) => {
  return (
    <Row
      align={"top"}
      justify="center"
      className={cx(styles["fedh-cell"], props.className)}
      style={props.style}
    >
      <Col
        span={10}
        className={cx(styles["fedh-cell-left"], styles["fedh-cell-element"])}
      >
        <div className={styles["fedh-cell-element-title"]}>
          {props.leftNode.title}
        </div>
        <div className={styles["fedh-cell-element-main"]}>
          {props.leftNode.children}
        </div>
        {props.leftNode.extra && (
          <div className={styles["fedh-cell-element-extra"]}>
            {props.leftNode.extra}
          </div>
        )}
      </Col>
      <Col span={4} className={styles["fedh-cell-action"]}>
        {props.actionNode}
      </Col>
      <Col
        span={10}
        className={cx(styles["fedh-cell-right"], styles["fedh-cell-element"])}
      >
        <div className={styles["fedh-cell-element-title"]}>
          {props.rightNode.title}
        </div>
        <div className={styles["fedh-cell-element-main"]}>
          {props.rightNode.children}
        </div>
        {props.rightNode.extra && (
          <div className={styles["fedh-cell-element-extra"]}>
            {props.rightNode.extra}
          </div>
        )}
      </Col>
    </Row>
  );
};
