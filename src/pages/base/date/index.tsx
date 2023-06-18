import { TimesToTimetamp, TimestampToTime } from "./components";
import { Card } from "antd";
import dayjs from "dayjs";
import zhCN from "dayjs/locale/zh-cn";
import styles from "./style.module.less";

export function Component() {
  dayjs.locale(zhCN);

  return (
    <div className={styles["format-date"]}>
      {/* 时间戳转时间 */}
      <Card title="时间戳转日期" size="small">
        <TimestampToTime />
      </Card>

      {/* 时间转时间戳 */}
      <Card title="日期转时间戳" size="small" style={{ marginTop: 20 }}>
        <TimesToTimetamp />
      </Card>
    </div>
  );
}

Component.displayName = "DateTool";
