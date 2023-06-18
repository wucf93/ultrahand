import { FC } from "react";
import { CodeMirror } from "@/components";
import { Typography, Row, Col, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface JsonInputProps {
  value?: string;
  onValueChange?: (value: JsonInputProps["value"]) => void;
}

const JsonInput: FC<JsonInputProps> = (props) => {
  return (
    <CodeMirror
      linter
      lang="json"
      value={props.value}
      style={{ height: "100%" }}
      onChange={props.onValueChange}
      placeholder="请输入JSON字符串"
      title={
        <Row align="middle" justify="space-between">
          <Col>
            <Typography.Text strong>Json 数据</Typography.Text>
          </Col>
          <Col>
            <Typography.Link onClick={() => props.onValueChange?.("")}>
              <Tooltip title="清空">
                <DeleteOutlined />
              </Tooltip>
            </Typography.Link>
          </Col>
        </Row>
      }
    />
  );
};

export default JsonInput;
