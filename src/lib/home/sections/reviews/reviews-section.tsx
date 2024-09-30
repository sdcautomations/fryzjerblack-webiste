import {
  Carousel,
  Flex,
  Grid,
  ReviewCard,
  SectionHeader,
} from "@/home/components";
import styles from "./reviews-sections.module.scss";

const MOBILE_CAROUSEL_ITEMS = [
  {
    name: "Karol",
    content: "Super, polecam pełen profesjonalizm",
  },
  {
    name: "Szymon",
    content: "Świetny salon, chodzę regularnie od trzech lat",
  },
  {
    name: "Urszula",
    content:
      "Super podejście, świetny efekt strzyżenia i przede wszystkim opanowanie do najmłodszego klienta",
  },
];

export const ReviewsSection = () => {
  return (
    <Grid className={styles["reviews-section"]}>
      <SectionHeader
        className={styles["reviews-section__header"]}
        heading="Zadowolonych Klientów"
        desc="MNÓSTWO"
      />

      <Carousel
        className={styles["reviews-section__carousel"]}
        items={MOBILE_CAROUSEL_ITEMS}
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

        <ReviewCard
          content="Świetny salon, chodzę regularnie od trzech lat"
          name="Szymon"
        />
      </Flex>
    </Grid>
  );
};
