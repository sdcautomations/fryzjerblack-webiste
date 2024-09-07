import { Flex, Grid, ReviewCard, SectionHeader } from "@/home/components";
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

        <Flex
          className={styles["reviews-section__cards"]}
          direction="row"
          gap="32px"
        >
          <ReviewCard
            content="Super, polecam pełen profesjonalizm"
            name="Karol"
          />

          <ReviewCard
            content="Super podejście, świetny efekt strzyżenia i przede wszystkim opanowanie do najmłodszego klienta"
            name="Urszula"
          />

          <ReviewCard content="Mega polecam, świetna robota " name="Marcin" />
        </Flex>
      </Grid>
    </section>
  );
};
