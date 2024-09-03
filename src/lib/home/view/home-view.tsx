import styles from "./home-view.module.scss";

import { Grid, SectionHeader, Text } from "@/home/components";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <Grid className={styles["home-view__grid"]}>
        <SectionHeader heading="Do twojej dyspozycji" desc="PROFESJONALISTA" />
      </Grid>
    </main>
  );
};
