import { FC, useMemo, useState } from "react";
import { CodeMirror } from "@/components";
import { Col, Row, Select, Typography } from "antd";
import { CaretDownOutlined, CopyOutlined } from "@ant-design/icons";

/** 操作类型 */
enum ACTION_TYPE {
  /** 格式化 */
  FORMAT = "format",
  /** 压缩 */
  COMPRESS = "compress",
}

const actions = {
  [ACTION_TYPE["FORMAT"]]: {
    label: "格式化",
    hander: (code: string) => {
      try {
        return JSON.stringify(JSON.parse(code), null, 2);
      } catch (error) {
        return "";
      }
    },
  },

  [ACTION_TYPE["COMPRESS"]]: {
    label: "压缩",
    hander: (code: string) => {
      try {
        return JSON.stringify(JSON.parse(code), null, 0);
      } catch (error) {
        return "";
      }
    },
  },
};

const ActionSelect = (props: {
  value: ACTION_TYPE;
  onChange: (value: ACTION_TYPE) => void;
}) => {
  const options = Object.keys(actions).map((key) => ({
    label: actions[key as ACTION_TYPE].label,
    value: key as ACTION_TYPE,
  }));

  return (
    <Select
      size="small"
      bordered={false}
      value={props.value}
      optionLabelProp="label"
      onChange={props.onChange}
      popupMatchSelectWidth={false}
      suffixIcon={<CaretDownOutlined style={{ pointerEvents: "none" }} />}
    >
      {options?.map((action) => (
        <Select.Option
          key={action.value}
          value={action.value}
          label={<Typography.Text strong>{action.label}</Typography.Text>}
        >
          {action.label}
        </Select.Option>
      ))}
    </Select>
  );
};

interface JsonPreviewProps {
  value?: string;
}

const JsonPreview: FC<JsonPreviewProps> = (props) => {
  const [action, setAction] = useState<ACTION_TYPE>(ACTION_TYPE.FORMAT);

  const result = useMemo(
    () => actions?.[action]?.hander?.(props.value || "") || "",
    [props.value, action]
  );

  return (
    <CodeMirror
      value={result}
      lang="json"
      title={
        <Row justify="space-between">
          <Col>
            <ActionSelect value={action} onChange={setAction} />
          </Col>
          <Col>
            {navigator.clipboard && (
              <Typography.Text
                copyable={{ icon: <CopyOutlined />, text: result }}
              />
            )}
          </Col>
        </Row>
      }
      readonly
      style={{ height: "100%" }}
    />
  );
};

export default JsonPreview;
