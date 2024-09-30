import styles from "./about-section.module.scss";

import backgroundImage from "@/../public/assets/images/about/image1.jpg";

import { Flex, Grid, Image, SectionHeader, Text } from "@/home/components";

export const AboutSection = () => {
  return (
    <Grid className={styles["about-section"]}>
      <SectionHeader
        className={styles["about-section__header"]}
        desc="PROFESJONALISTA"
        heading="Do Twojej Dyspozycji"
      />

      <div
        className={styles["about-section__image"]}
        style={{
          backgroundImage: `url('${backgroundImage.src}')`,
        }}
      />

      <Flex
        className={styles["about-section__content"]}
        gap="32px"
        justify="center"
      >
        <Text
          className={styles["about-section__content__header"]}
          size="32px"
          weight="600"
        >
          Historia Salonu
        </Text>

        <Text
          className={styles["about-section__content__story"]}
          size="28px"
          weight="400"
          opacity="0.8"
        >
          W 2017 roku zrodziła się wizja stworzenia miejsca, gdzie mężczyźni
          mogliby nie tylko zadbać o swoje włosy, ale także poczuć się
          wyjątkowo. Założyciel, Marcin Kowalski, pasjonat fryzjerstwa z
          wieloletnim doświadczeniem, postanowił otworzyć salon, który łączyłby
          tradycyjne techniki z nowoczesnym podejściem do męskiej pielęgnacji.
        </Text>
      </Flex>
    </Grid>
  );
};
