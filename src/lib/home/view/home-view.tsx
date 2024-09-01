import styles from "./home-view.module.scss";

import { Grid, Text } from "@/home/components";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <Grid className={styles["home-view__grid"]}>
        <Text
          className={styles["home-view__grid__header"]}
          size="32px"
          weight="500"
          opacity={0.7}
        >
          Strona główna
        </Text>
      </Grid>
    </main>
  );
};
