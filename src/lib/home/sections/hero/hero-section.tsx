import styles from "./hero-section.module.scss";

import hero1 from "@/../public/assets/images/hero/img1.png";
import hero2 from "@/../public/assets/images/hero/img2.png";
import hero3 from "@/../public/assets/images/hero/img3.png";

import { Flex, Grid, Image, Text } from "@/home/components";

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
          SALON FRYZJERSKI BLACK
        </Text>
      </Flex>

      <div className={styles["hero-section__grid"]}>
        <Image src={hero1.src} />

        <Image src={hero2.src} />

        <Image
          className={styles["hero-section__grid__third-img"]}
          src={hero3.src}
        />
      </div>
    </Grid>
  );
};
