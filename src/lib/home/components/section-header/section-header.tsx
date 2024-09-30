import classNames from "classnames";
import styles from "./section-header.module.scss";

import { SectionHeaderProps } from "./section-header.types";
import { Text } from "@/home/components";

export const SectionHeader = ({
  heading,
  desc,
  className,
}: SectionHeaderProps) => {
  const headingClassNames = classNames(styles["section-header"], className);

  return (
    <div className={headingClassNames}>
      <Text
        className={styles["section-header__desc"]}
        size="20px"
        weight="400"
        opacity={"0.7"}
      >
        {desc}
      </Text>

      <Text
        className={styles["section-header__title"]}
        size="40px"
        weight="600"
      >
        {heading}
      </Text>
    </div>
  );
};
