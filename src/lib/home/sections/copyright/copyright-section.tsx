import styles from "./copyright-section.module.scss";

import { Grid, Text } from "@/home/components";

export const CopyrightSection = () => {
  return (
    <Grid className={styles["copy-section"]}>
      <Text className={styles["copy-section__text"]} size="16px" opacity="0.6">
        POWERED BY SDCAUTOMATIONS
      </Text>
    </Grid>
  );
};
