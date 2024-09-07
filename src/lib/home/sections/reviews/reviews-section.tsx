import { Grid, SectionHeader } from "@/home/components";
import styles from "./reviews-sections.module.scss";

export const ReviewsSection = () => {
  return (
    <section className={styles["reviews-section"]}>
      <Grid className={styles["grid"]}>
        <SectionHeader
          className={styles["reviews-section__header"]}
          heading="Zadowolonych Klientów"
          desc="MNÓSTWO"
        />
      </Grid>
    </section>
  );
};
