import styles from "./section-header.module.scss";

import { SectionHeaderProps } from "./section-header.types";
import { Text } from "@/home/components";

export const SectionHeader = ({ heading, desc }: SectionHeaderProps) => {
  return (
    <div className={styles["section-header"]}>
      <Text size="20px" weight="400" opacity={"0.7"}>
        {desc}
      </Text>

      <Text size="40px" weight="600">
        {heading}
      </Text>
    </div>
  );
};
