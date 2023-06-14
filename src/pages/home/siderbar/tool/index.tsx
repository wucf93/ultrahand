import { useMemo } from "react";
import { Tooltip, TooltipProps } from "antd";
import classnames from "classnames";
import styles from "./style.module.less";

export interface ToolProps {
  active?: boolean;
  icon: React.ReactNode;
  tooltip?: string | TooltipProps;
  onClick?: () => void;
}

const Tool: React.FC<ToolProps> = (props) => {
  const tootip = useMemo(
    () =>
      typeof props.tooltip === "string"
        ? ({ title: props.tooltip, placement: "right" } as TooltipProps)
        : props.tooltip,
    [props.tooltip]
  );

  const classname = useMemo(
    () =>
      classnames(styles["home-toolbar-tool"], {
        [styles["active"]]: props.active,
      }),
    [props.active]
  );

  return (
    <div className={classname} onClick={props.onClick}>
      <Tooltip {...tootip}>{props.icon}</Tooltip>
    </div>
  );
};

export default Tool;
