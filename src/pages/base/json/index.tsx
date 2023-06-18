import { useMemo, useState } from "react";
import { Row, Col, Grid } from "antd";
import JsonInput from "./json-input";
import style from "./style.module.less";
import JsonPreview from "./json-preview";

const defaultCode = `{"name": "林克"}`;

export function Component() {
  const [jsonStr, setJsonStr] = useState<string | undefined>(defaultCode);

  const screen = Grid.useBreakpoint();

  const codeHeight = useMemo(
    () => (screen.lg ? "100%" : "calc(50% - 8px)"),
    [screen.lg]
  );

  return (
    <Row className={style["base-json"]} gutter={[16, 16]}>
      <Col xs={24} lg={12} style={{ height: codeHeight }}>
        <JsonInput value={jsonStr} onValueChange={setJsonStr} />
      </Col>
      <Col xs={24} lg={12} style={{ height: codeHeight }}>
        <JsonPreview value={jsonStr} />
      </Col>
    </Row>
  );
}

Component.displayName = "JsonTool";
