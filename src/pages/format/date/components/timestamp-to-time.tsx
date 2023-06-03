import { useState, useMemo } from "react";
import { Cell } from "@/components";
import { Button, Input } from "antd";
import Result from "./result";
import { ArrowRightOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const TimesToTimetamp = () => {
  const [value, setValue] = useState<string>();

  const result = useMemo(() => {
    let date;
    if (value && (date = dayjs.unix(Number(value) / 1000)).isValid()) {
      return date.format("YYYY-MM-DD HH:mm:ss");
    } else {
      return undefined;
    }
  }, [value]);

  return (
    <Cell
      leftNode={{
        title: "时间戳（毫秒）",
        children: (
          <Input
            placeholder="请输入时间戳"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ),
      }}
      actionNode={<Button icon={<ArrowRightOutlined />} type="text" />}
      rightNode={{
        title: "北京时间",
        children: <Result placeholder="格式化结果">{result}</Result>,
      }}
    />
  );
};

export default TimesToTimetamp;
