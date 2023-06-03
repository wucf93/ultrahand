import { FC, useMemo } from "react";
import { Typography } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import cx from "classnames";
import styles from "./style.module.less";

interface ResultProps {
  error?: string;
  placeholder?: string;
  children?: string | number;
  style?: React.CSSProperties;
}

const Result: FC<ResultProps> = (props) => {
  const isError = useMemo(() => !!props.error, [props.error]);

  const isPlaceholder = useMemo(
    () => !isError && props.children === undefined && !!props.placeholder,
    [props.children, props.placeholder, isError]
  );

  return (
    <Typography.Text
      ellipsis
      className={cx(styles["component-result"], {
        [styles["show-error"]]: !!props.error,
        [styles["show-placeholder"]]: isPlaceholder,
      })}
      copyable={
        isPlaceholder || props.children === undefined || isError
          ? false
          : {
              icon: (
                <CopyOutlined className={styles["component-result-copy"]} />
              ),
            }
      }
      style={props.style}
    >
      {isError
        ? props.error
        : isPlaceholder
        ? props.placeholder
        : props.children}
    </Typography.Text>
  );
};

export default Result;
