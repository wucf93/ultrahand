import { PageLayout } from "@/components";
import styles from "./style.module.less";

export function Component() {
  return <PageLayout className={styles["page-app"]} title="应用"></PageLayout>;
}
