import styles from "./home-view.module.scss";

import { Grid } from "@/home/components";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <Grid className={styles["home-view__grid"]}>
        <p>Strona główna</p>
      </Grid>
    </main>
  );
};
