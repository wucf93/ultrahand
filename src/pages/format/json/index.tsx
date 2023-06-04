import { useState } from "react";
import { Card, CodeMirror } from "@/components";
import { Segmented } from "antd";
import { FileZipOutlined, FunctionOutlined } from "@ant-design/icons";
import style from "./style.module.less";

/** 操作类型 */
enum ACTION_TYPE {
  /** 格式化 */
  FORMATER = 1,
  /** 压缩 */
  COMPRESS,
}

export function Component() {
  const [action, setAction] = useState<ACTION_TYPE>(ACTION_TYPE.FORMATER);
  const [jsonStr, setJsonStr] = useState<string>();

  return (
    <div className={style["format-json"]}>
      <Card title="JSON 数据">
        <Card.Item>
          <Segmented
            value={action}
            onChange={(type) => setAction(type as unknown as ACTION_TYPE)}
            options={[
              {
                label: "格式化",
                value: ACTION_TYPE.FORMATER,
                icon: <FunctionOutlined />,
              },
              {
                label: "压缩",
                value: ACTION_TYPE.COMPRESS,
                icon: <FileZipOutlined />,
              },
            ]}
          />
        </Card.Item>
        <Card.Item className={style["format-json-textarea"]}>
          <CodeMirror value={jsonStr} onChange={(str) => setJsonStr(str)} />
        </Card.Item>
      </Card>
    </div>
  );
}

Component.displayName = "FormatJSON";
