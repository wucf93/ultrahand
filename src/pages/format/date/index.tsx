import { Card } from "@/components";
import { TimesToTimetamp, TimestampToTime } from "./components";
import dayjs from "dayjs";
import zhCN from "dayjs/locale/zh-cn";
import styles from "./style.module.less";

export function Component() {
  dayjs.locale(zhCN);

  return (
    <div className={styles["format-date"]}>
      {/* 时间戳转时间 */}
      <Card title="时间戳转时间">
        <Card.Item>
          <TimestampToTime />
        </Card.Item>
      </Card>

      {/* 时间转时间戳 */}
      <Card title="时间戳转时间" style={{ marginTop: 20 }}>
        <Card.Item>
          <TimesToTimetamp />
        </Card.Item>
      </Card>
    </div>
  );
}

Component.displayName = "FormatDate";
