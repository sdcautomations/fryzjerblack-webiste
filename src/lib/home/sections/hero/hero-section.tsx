import { Flex, Grid, Image, Text } from "@/home/components";
import styles from "./hero-section.module.scss";

export const HeroSection = () => {
  return (
    <Grid className={styles["hero-section"]}>
      <Flex
        className={styles["hero-section__header"]}
        gap="8px"
        justify="center"
        align="center"
      >
        <Text
          className={styles["hero-section__header__title"]}
          size="64px"
          weight="600"
        >
          Barber na którego możesz liczyć
        </Text>

        <Text
          className={styles["hero-section__header__subtitle"]}
          size="24px"
          weight="400"
          opacity="0.6"
        >
          SALON FRYZJERSKI "BLACK"
        </Text>
      </Flex>

      <div className={styles["hero-section__grid"]}>
        <Image src="hero/img1.png" />

        <Image src="hero/img2.png" />

        <Image
          className={styles["hero-section__grid__third-img"]}
          src="hero/img3.png"
        />
      </div>
    </Grid>
  );
};
