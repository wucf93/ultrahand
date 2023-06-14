import { useState, useMemo } from "react";
import { Cell } from "@/components";
import { Button, DatePicker } from "antd";
import Result from "./result";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Dayjs } from "dayjs";

const TimestampToTime = () => {
  const [value, setValue] = useState<Dayjs | null>();

  const result = useMemo(
    () => (value?.isValid() ? value?.unix() * 1000 : undefined),
    [value]
  );

  return (
    <Cell
      leftNode={{
        title: "时间（北京时间）",
        children: (
          <DatePicker
            value={value}
            onChange={(value) => setValue(value)}
            showTime
            placeholder="请选择时间"
            style={{ width: "100%" }}
          />
        ),
      }}
      actionNode={<Button icon={<ArrowRightOutlined />} type="text" />}
      rightNode={{
        title: "时间戳（毫秒）",
        children: <Result placeholder="格式化结果">{result}</Result>,
      }}
    />
  );
};

export default TimestampToTime;
